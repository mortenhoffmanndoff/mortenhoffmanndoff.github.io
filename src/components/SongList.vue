<template>
    <div>
      <input v-model="newSong.name" placeholder="Song Name" />
      <input v-model.number="newSong.bpm" type="number" placeholder="BPM" />
      <button @click="addSong">+</button>
  
      <ul>
        <li v-for="song in songs" :key="song.name">
          {{ song.name }} - {{ song.bpm }} BPM
          <button @click="toggleSong(song)">
            {{ song.isPlaying ? 'Stop' : 'Play' }}
          </button>
          <button @click="deleteSong(song)">Delete</button>
        </li>
      </ul>
    </div>
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
  