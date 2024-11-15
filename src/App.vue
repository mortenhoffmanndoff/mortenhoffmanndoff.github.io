<template>
  <SongList @play="setCurrentBpm" @toggle-play="playBpm"/>
  <BpmPlayer :bpm="currentBpm" ref="bpmPlayer"/>
</template>

<script>
import SongList from './components/SongList.vue';
import BpmPlayer from './components/BpmPlayer.vue';

export default {
  components: {
    SongList,
    BpmPlayer
  },
  data() {
    return {
      currentBpm: null
    };
  },
  methods: {
    setCurrentBpm(bpm) {
      this.currentBpm = bpm;
    },
    playBpm() {
      if(this.$refs.bpmPlayer) {
        this.$refs.bpmPlayer.togglePlay(); // Start eller stop BpmPlayer
      }
    }
  }
};
</script>
