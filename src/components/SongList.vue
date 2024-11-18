<template>
     <h2>Metronome</h2>
     <!-- <p>Add some songs!</p> -->
    <div class="songlist">
      <input class="song" v-model="newSong.name" placeholder="Song Name" />
      <input class="bpm" v-model.number="newSong.bpm" type="number" placeholder="BPM" />
      <button class="add" @click="addSong">
        <svg viewBox="0 0 24 24" width="32" height="32" stroke="white" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
        Tilføj
      </button>
    </div>
    <ul>
      <li v-for="song in songs" :key="song.name" class="savedlist">
        <button @click="toggleSong(song)" class="display-flex align-items-center gap-8">
          <span v-if="song.isPlaying">
            <svg viewBox="0 0 24 24" width="32" height="32" stroke="white" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line></svg>
          </span>
          <span v-else>
            <svg viewBox="0 0 24 24" width="32" height="32" stroke="white" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
          </span>
          {{ song.name }} <strong>({{ song.bpm }} BPM)</strong>
        </button>
        <div class="display-flex gap-8" style="margin-left: auto">
          <button @click="deleteSong(song)">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="red" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
          </button>
        </div>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newSong: {
          name: '',
          bpm: null
        },
        songs: this.loadSongs(),
        currentPlayingSong: null
      };
    },
    methods: {
      addSong() {
        if (this.newSong.name && this.newSong.bpm) {
          this.songs.unshift({...this.newSong, isPlaying: false}); //push
          this.newSong.name = '';
          this.newSong.bpm = null;
          this.saveSongs();
        }
      },
      saveSongs() {
        localStorage.setItem('songs', JSON.stringify(this.songs));
      },
      loadSongs() {
        let loadedSongs = JSON.parse(localStorage.getItem('songs')) || [];
        return loadedSongs.map(song => ({ ...song, isPlaying: false }));
      },
      toggleSong(song) {
        if (this.currentPlayingSong === song) {
          song.isPlaying = !song.isPlaying;
          if (!song.isPlaying) {
            this.$emit('toggle-play'); // Stop the player
            this.currentPlayingSong = null;
          }
        } else {
          if (this.currentPlayingSong) {
            this.currentPlayingSong.isPlaying = false;
          }
          song.isPlaying = true;
          this.$emit('play', song.bpm); // Emit the play event
          this.$emit('toggle-play'); // Start the player if it's not running
          this.currentPlayingSong = song;
        }
      },
      deleteSong(song) {
        // Stop the current playing song if it's the one being deleted
        if (this.currentPlayingSong === song) {
          this.$emit('toggle-play'); // Stop the player
          this.currentPlayingSong = null;
        }
        // Find the index and remove the song from the list
        this.songs = this.songs.filter(s => s !== song);
        this.saveSongs();
      }
    }
  };
  </script>
  