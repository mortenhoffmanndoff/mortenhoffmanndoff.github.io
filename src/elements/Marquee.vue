<template>
  <div class="marquee-text">
    <div class="marquee-text-track" v-for="(clientRow, rowIndex) in clientData" :key="rowIndex">
      <div class="marquee-text-track-item" v-for="(client, i) in clientRow" :key="i">{{ client }}</div>
      <!-- Duplicate for seamless scrolling -->
      <div class="marquee-text-track-item" aria-hidden="true" v-for="(client, i) in clientRow" :key="'copy-' + i">{{ client }}</div>
    </div>
  </div>
</template>

<script>

import clientData from '../data/clients.json';

export default {
  name: 'MarqueeText',
  data() {
    return {
      clientData: clientData,
    };
  },
};

</script>

<style>

.fadeout-horizontal {
  mask-image: linear-gradient(
    to right, 
    transparent,
    black 120px, 
    black calc(100% - 120px),
    transparent
    );
}

.marquee-text {
  background: var(--color-light-orange);
  overflow: clip;
}

.marquee-text-track {
  display: flex;
  padding-left: 4.8rem;
  gap: 4.8rem;
  width: max-content; 
  animation: marquee-move-text 60s linear infinite;

  &:nth-child(even){
    animation-direction: reverse;
  }
}

.marquee-text-track-item {
  color: var(--color-dark-blue);
  font-size: 120px;
  font-weight: 900;
  letter-spacing: -3.6px;
  line-height: 1.2;
  transition: scale 0.3s ease-in-out;
  text-transform: uppercase;

  &:nth-child(odd) {
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--dark-blue, #22223A);
  }

  &:hover {
   scale: 1.15;
  }
}

@keyframes marquee-move-text {
  to {
    transform: translateX(-50%);
  }
}
</style>