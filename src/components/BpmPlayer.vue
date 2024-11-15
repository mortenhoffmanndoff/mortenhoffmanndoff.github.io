<template>
    <div>
      <p>Current BPM: {{ currentBpm }}</p>
      <!-- <button @click="togglePlay">
        {{ isPlaying ? 'Stop' : 'Play' }}
      </button> -->
    </div>
  </template>
  
  <script>
import clickSoundFile from '../assets/MetronomeUp.wav'; // Importer som modul

export default {
  props: ['bpm'],
  data() {
    return {
      currentBpm: this.bpm,
      isPlaying: false,
      intervalId: null,
      clickSound: new Audio(clickSoundFile) // Brug den importerede lydfil
    };
  },
  methods: {
    playClick() {
      this.clickSound.currentTime = 0; // Start ved begyndelsen af lydfilen
      this.clickSound.play();
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
  }
};
</script>
