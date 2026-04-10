#!/usr/bin/env node
//
// Fetches the latest ECB deposit facility rate and updates data.json.
// CITA6 must be updated manually in data.json (licensed by DFBF, no free API).
//
// Usage:  node update-data.js
//

const fs = require('fs');
const https = require('https');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'data.json');

// ECB deposit facility rate — daily series (aggregated to monthly)
const ECB_URL =
  'https://data-api.ecb.europa.eu/service/data/FM/D.U2.EUR.4F.KR.DFR.LEV?format=csvdata&startPeriod=2025-01&detail=dataonly';

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { Accept: 'text/csv' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetch(res.headers.location).then(resolve, reject);
      }
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
      let body = '';
      res.on('data', (c) => (body += c));
      res.on('end', () => resolve(body));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function parseEcbCsv(csv) {
  // Daily data → take last observation per month
  const rates = new Map();
  const lines = csv.trim().split('\n');
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(',');
    const period = cols[cols.length - 2]; // TIME_PERIOD (YYYY-MM-DD)
    const value = parseFloat(cols[cols.length - 1]); // OBS_VALUE
    if (period && !isNaN(value)) {
      const month = period.slice(0, 7);
      rates.set(month, value); // overwrites earlier days → keeps last
    }
  }
  return rates;
}

async function main() {
  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));

  console.log('Fetching ECB deposit facility rate…');
  let ecbRates;
  try {
    const csv = await fetch(ECB_URL);
    ecbRates = parseEcbCsv(csv);
    console.log(`  Got ${ecbRates.size} monthly ECB observations.`);
  } catch (err) {
    console.error('  Failed to fetch ECB data:', err.message);
    process.exit(1);
  }

  let updated = 0;
  for (const month of data.months) {
    if (month.type !== 'historical') continue;
    const rate = ecbRates.get(month.date);
    if (rate !== undefined && month.ecb !== rate) {
      console.log(`  ${month.date}: ECB ${month.ecb} → ${rate}`);
      month.ecb = rate;
      updated++;
    }
  }

  // Add new months from ECB data that aren't in data.json yet
  const existingDates = new Set(data.months.map((m) => m.date));
  const today = new Date().toISOString().slice(0, 7);
  const sorted = [...ecbRates.entries()].sort(([a], [b]) => a.localeCompare(b));
  for (const [date, rate] of sorted) {
    if (!existingDates.has(date) && date <= today) {
      console.log(`  ⚠ ${date}: ECB rate ${rate}% available but no CITA6 data. Add manually to data.json.`);
    }
  }

  data.lastUpdated = new Date().toISOString().slice(0, 10);

  if (updated > 0) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2) + '\n');
    console.log(`\n✅ Updated ${updated} entries. data.json saved.`);
  } else {
    // Still update the timestamp
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2) + '\n');
    console.log('\n✅ No changes needed. Timestamp updated.');
  }
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
