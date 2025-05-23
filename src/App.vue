<template>
  <header>
    <div class="logo">
      <span>Christina</span>
      <span>Bjørn</span>
    </div>
    <svg class="menu-animation" width="112" height="107" viewBox="0 0 112 107" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="52" cy="52" r="51.5" transform="matrix(-1 0 0 1 108 2)" stroke="#22223A" />
      <path 
        d="M56 1C25.5808 1 1 24.5476 1 53.5C1 82.4524 25.5808 106 56 106C86.4192 106 111 82.4524 111 53.5C111 24.5476 86.4192 1 56 1Z"
        stroke="#22223A" stroke-width="2" />
    </svg>
  </header>

  <Hero />

    <section class="horizontal-scroll-section" ref="scrollSection">
    <div class="horizontal-sticky">
      <div class="horizontal-inner" ref="horizontalInner">
        <div
          class="number"
          v-for="n in 8"
          :key="n"
          :style="getNumberStyle(n)"
        >{{ n }}</div>
      </div>
    </div>
  </section>

  <!-- CLIENTS SECTION START -->
  <section class="clients-section">
    <div class="clients-header">
      <div class="clients-divider"></div>
      <div class="clients-title">CLIENTS</div>
      <div class="clients-divider"></div>
    </div>
    <div class="clients-list">
      <div
        v-for="(row, i) in clientRows"
        :key="i"
        class="client-row"
        :style="getClientRowStyle(i)"
      >
        <span
          v-for="(client, j) in row"
          :key="client"
          :class="['client-name', (j % 2 === 0 ? 'client-bold' : 'client-outline')]"
        >{{ client }}</span>
      </div>
    </div>
  </section>
  <!-- CLIENTS SECTION END -->

  <img src="./assets/i-am.png" alt="">
</template>

<script>
import Hero from './components/Hero.vue';

export default {
  components: { Hero },
  data() {
    return {
      progress: 0,
      inSection: false,
      clientRows: [
        ["NOVO NORDISK.", "LEGO."],
        ["TV2.", "CARLSBERG.", "BMW."],
        ["PFIZER.", "ADIDAS.", "BIOTEX."],
        ["JUST-EAT.", "NETFLIX."],
        ["MICROSOFT.", "STIMOROL."],
        ["SPOTIFY."]
      ],
      clientsScrollY: 0,
      smoothScrollY: 0,
      animationFrame: null
    }
  },
  mounted() {
    // HORISONTAL SCROLL
    const section = this.$refs.scrollSection;
    const horizontalInner = this.$refs.horizontalInner;
    const horizontalScrollLength = horizontalInner.scrollWidth - window.innerWidth;
    const scrollAreaHeight = window.innerHeight + horizontalScrollLength;
    section.style.height = `${scrollAreaHeight}px`;

    window.addEventListener('scroll', this.onScroll);
    this.animateSmoothScroll();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
  },
  methods: {
    onScroll() {
      // HORISONTAL LOGIK
      const section = this.$refs.scrollSection;
      const horizontalInner = this.$refs.horizontalInner;
      const horizontalScrollLength = horizontalInner.scrollWidth - window.innerWidth;
      const scrollAreaHeight = window.innerHeight + horizontalScrollLength;
      const sectionTop = section.offsetTop;
      const scrollY = window.scrollY;
      const startScroll = sectionTop;
      const endScroll = sectionTop + scrollAreaHeight - window.innerHeight;
      let progress = 0;

      this.inSection = (scrollY >= startScroll && scrollY <= endScroll);

      if (scrollY < startScroll) {
        horizontalInner.style.transform = 'translateX(0)';
        this.progress = 0;
      } else if (scrollY > endScroll) {
        horizontalInner.style.transform = `translateX(-${horizontalScrollLength}px)`;
        this.progress = 1;
      } else {
        progress = (scrollY - startScroll) / (scrollAreaHeight - window.innerHeight);
        const translateX = progress * horizontalScrollLength;
        horizontalInner.style.transform = `translateX(-${translateX}px)`;
        this.progress = progress;
      }

      // CLIENTS PARALLAX ("target" scrollY)
      this.clientsScrollY = scrollY;
    },
    animateSmoothScroll() {
      // Smooth lerp til clients-section scroll
      this.smoothScrollY += (this.clientsScrollY - this.smoothScrollY) * 0.04; //0.07
      this.animationFrame = requestAnimationFrame(this.animateSmoothScroll);
    },

//     getClientRowStyle(index) {
//   const direction = index % 2 === 0 ? -1 : 1;
//   const delayPerRow = 50; // hvor mange pixels extra delay per row - prøv at justere dette tal!
//   const deadZone = 50;    // hvor meget alle rækker ikke reagerer til at starte med

//   // Forskudt aktivering for hver række
//   const rowDelay = index * delayPerRow;
//   const activatedScroll = Math.max(0, this.smoothScrollY - deadZone - rowDelay);

//   const maxOffset = 150; // hvor langt der maks forskydes
//   let offset = activatedScroll * 0.18 * direction;
//   offset = Math.max(-maxOffset, Math.min(maxOffset, offset));

//   return {
//     transform: `translateX(${offset}px)`,
//     transition: 'transform 0.08s cubic-bezier(.45,.05,.55,.95)',
//     willChange: 'transform'
//   };
// },


    // getClientRowStyle(index) {
    //   const direction = index % 2 === 0 ? -1 : 1;
    //   const deadZone = 100; // Skift dette tal (pixels) efter behov - prøv fx 100-200
    //   const activatedScroll = Math.max(0, this.smoothScrollY - deadZone);
    //   const offset = activatedScroll * 0.2 * direction; // 0.2 kan justeres for hastighed

    //   return {
    //     transform: `translateX(${offset}px)`,
    //     transition: 'transform 0.08s cubic-bezier(.45,.05,.55,.95)',
    //     willChange: 'transform'
    //   };
    // },

//      getClientRowStyle(index) {
//   const direction = index % 2 === 0 ? -1 : 1; // Første række mod venstre
//   const offset = this.smoothScrollY * 0.3 * direction; // 0.4
//   return {
//     transform: `translateX(${offset}px)`,
//     transition: 'transform 0.08s cubic-bezier(.45,.05,.55,.95)',
//     willChange: 'transform'
//   };
// },

getClientRowStyle(index) {
  const direction = index % 2 === 0 ? -1 : 1; // Første række mod venstre
  const delayPerRow = 500;   // Antal pixels man skal scrolle ekstra før næste række bevæger sig
  const rowDelay = index * delayPerRow;
  const activatedScroll = Math.max(0, this.smoothScrollY - rowDelay);

  const offset = activatedScroll * 0.2 * direction;

  return {
    transform: `translateX(${offset}px)`,
    transition: 'transform 0.08s cubic-bezier(.45,.05,.55,.95)',
    willChange: 'transform'
  };
},



    // Horisontal tal
    getColor(proximity) {
      if (proximity > 0.8) return 'var(--color-dark-blue)';
      if (proximity > 0.55) return 'var(--color-light-blue)';
      if (proximity > 0.3) return 'var(--color-gray-purple)';
      if (proximity > 0.13) return 'var(--color-gray-orange)';
      return 'var(--color-light-orange)';
    },
    getText(proximity) {
      if (proximity > 0.7) return 'var(--color-almost-white)';
      return 'var(--color-almost-black)';
    },
    getNumberStyle(n) {
      const spread = 0.12;
      const center = (n - 1) / 7;
      const proximity = Math.max(0, 1 - Math.abs(center - this.progress) / spread);

      if (!this.inSection) {
        return {
          transform: 'scale(1)',
          background: 'var(--color-light-orange)',
          color: 'var(--color-almost-black)',
          zIndex: 1,
          transition: 'transform 0.25s cubic-bezier(.42,1.8,.55,1), background 0.24s, color 0.17s'
        }
      }
      const maxScale = 2;
      const scale = 1 + proximity * (maxScale-1);
      const background = this.getColor(proximity);
      const color = this.getText(proximity);

      return {
        transform: `scale(${scale})`,
        background,
        zIndex: Math.round(proximity*100),
        color,
        transition: 'transform 0.25s cubic-bezier(.42,1.8,.55,1), background 0.24s, color 0.17s'
      }
    }
  }
}
</script>

<style scoped>
/* ------- CLIENTS SECTION ------- */
.clients-section {
  background: #f7f0ec;
  min-height: 100vh;
  padding: 6vw 0 6vw 0;
  margin-bottom: 2vw;
}
.clients-header {
  display: flex;
  align-items: center;
  gap: 2vw;
  margin-bottom: 3vw;
}
.clients-divider {
  flex: 1;
  height: 2px;
  background: #22223A;
  opacity: 0.18;
}
.clients-title {
  font-weight: bold;
  font-size: 2.1rem;
  letter-spacing: 0.06em;
  text-align: center;
  text-transform: uppercase;
  padding: 0 1.5vw;
}
.clients-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7vw;
}
.client-row {
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  font-size: 120px;
  min-height: 120px;
  line-height: 1.01;
  margin-bottom: 0.3vw;
  will-change: transform;
}
.client-name {
  margin-right: 2vw;
  display: inline-block;
}
.client-bold {
  font-weight: 900;
  color: #22223A;
}
.client-outline {
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 2px #22223A;
}
@media (max-width: 1200px) {
  .client-row { font-size: 12vw; min-height:12vw; }
  .clients-title { font-size: 3.3vw;}
}

/* --- RESTEN SOM FØR --- */
header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 36px 56px;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  display: flex;
  flex-direction: column;
  font-size: 32px;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--color-dark-blue);
}
.horizontal-scroll-section {
  position: relative;
  width: 100%;
}
.horizontal-sticky {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: white;
  z-index: 2;
}
.horizontal-inner {
  display: flex;
  gap: 2vw;
  will-change: transform;
  align-items: center;
  height: 100vh;
}
.number {
  flex: 0 0 auto;
  font-size: 20vw;
  font-weight: bold;
  background: var(--color-light-orange);
  border-radius: 1rem;
  padding: 1rem;
  width: 15vw;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  color: var(--color-almost-black);
}
</style>
