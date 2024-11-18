<template>
  <div>
    <!-- <p>Current BPM: {{ currentBpm }}</p> -->
    <!-- <button @click="togglePlay">
      {{ isPlaying ? 'Stop' : 'Play' }}
    </button> -->
  </div>
</template>

<script>
import clickSoundFile from '../assets/MetronomeUp.wav';

export default {
  props: ['bpm'],
  data() {
    return {
      currentBpm: this.bpm,
      isPlaying: false,
      intervalId: null,
      audioContext: new (window.AudioContext || window.webkitAudioContext)(),
      audioBuffer: null
    };
  },
  mounted() {
    // Indlæs lydfilen ved hjælp af fetch API
    fetch(clickSoundFile)
      .then(response => response.arrayBuffer())
      .then(data => {
        this.audioContext.decodeAudioData(data, (buffer) => {
          this.audioBuffer = buffer;
        });
      });
  },
  methods: {
    playClick() {
      const source = this.audioContext.createBufferSource();
      source.buffer = this.audioBuffer;
      source.connect(this.audioContext.destination);
      source.start(0);
    },
    togglePlay() {
      if (this.isPlaying) {
        clearInterval(this.intervalId);
      } else {
        const interval = (60 / this.currentBpm) * 1000;
        this.intervalId = setInterval(this.playClick, interval);
      }
      this.isPlaying = !this.isPlaying;
    }
  },
  watch: {
    bpm(newBpm) {
      this.currentBpm = newBpm;
      if (this.isPlaying) {
        clearInterval(this.intervalId);
        const interval = (60 / this.currentBpm) * 1000;
        this.intervalId = setInterval(this.playClick, interval);
      }
    },
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
    this.audioContext.close(); // Luk AudioContext når komponenten unmountes
  }
};
</script>
