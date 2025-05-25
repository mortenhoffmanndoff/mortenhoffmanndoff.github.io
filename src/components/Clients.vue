<template>
  <section class="clients-section">
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
          :class="['client-name', j % 2 === 0 ? 'client-bold' : 'client-outline']"
        >
          {{ client }}
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import clientRowsData from '../data/clients.json';

export default {
  name: "Clients",
  data() {
    return {
      clientRows: clientRowsData, // Bruger indholdet fra JSON
      clientsScrollY: 0,
      smoothScrollY: 0,
      animationFrame: null,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    this.animateSmoothScroll();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
    if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
  },
  methods: {
    onScroll() {
      this.clientsScrollY = window.scrollY;
    },
    animateSmoothScroll() {
      this.smoothScrollY += (this.clientsScrollY - this.smoothScrollY) * 0.04;
      this.animationFrame = requestAnimationFrame(this.animateSmoothScroll);
    },
    getClientRowStyle(index) {
      const direction = index % 2 === 0 ? -1 : 1;
      const delayPerRow = 500;
      const rowDelay = index * delayPerRow;
      const activatedScroll = Math.max(0, this.smoothScrollY - rowDelay);

      const offset = activatedScroll * 0.35 * direction;

      return {
        transform: `translateX(${offset}px)`,
        transition: "transform 0.08s cubic-bezier(.45,.05,.55,.95)",
        willChange: "transform",
      };
    },
  },
};
</script>

<style scoped>
/* ------- CLIENTS SECTION ------- */
.clients-section {
  background: var(--color-light-orange);
  /* min-height: 100dvh;  */
  padding: 6vw 0 6vw 0;
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
  display: inline-block;
  white-space: nowrap;
  margin-right: 2vw;
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
  .client-row {
    font-size: 12vw;
    min-height: 12vw;
  }

  .clients-title {
    font-size: 3.3vw;
  }
}
</style>