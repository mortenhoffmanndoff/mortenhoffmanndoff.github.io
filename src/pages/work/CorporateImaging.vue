<template>
  <div class="corporate-imaging">
    <!-- <Hero class="corporate-imaging-hero" height="large" :textItems="['Authorative and', 'Generic Yet full of', '<strong>Identity</strong> and personality']"></Hero> -->
    <Hero class="corporate-imaging-hero" :textSize="'xlarge'" height="large" :textItems="['Corporate', '&amp; Imaging']"></Hero>
    <Hero 
      :textItems="['<strong>Authorative and</strong>', '<strong>Generic Yet full of</strong>', 'Identity <strong>and</strong> personality']"
      height="small"
      textSize="small"
    />
    <Media :mediaItems="[
      {
        type: 'video',
        src: '/02-corporate-imaging/videos/superb.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Superb',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/02-corporate-imaging/videos/arla.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'UK',
        format: 'video',
        title: 'Arla',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/02-corporate-imaging/videos/tampax.mp4',
        poster: '/02-corporate-imaging/posters/tampax.jpg',
        language: 'DK',
        format: 'video',
        title: 'Tampax',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/02-corporate-imaging/videos/gajol.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Gajol',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/02-corporate-imaging/videos/youtube-music-eyes.mp4',
        // poster: '/02-corporate-imaging/videos/FIFA-Training-Centre-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Youtube Music',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/02-corporate-imaging/videos/damixa.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'UK',
        format: 'video',
        title: 'Damixa',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/02-corporate-imaging/videos/nyborg-strand.mp4',
        // poster: '/02-corporate-imaging/videos/Imaging-Spotify-1-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Nyborg Strand',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/02-corporate-imaging/videos/obtinu.mp4',
        poster: '/02-corporate-imaging/posters/obtinu.jpg',
        language: 'UK',
        format: 'video',
        title: 'Obtinu',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/02-corporate-imaging/videos/youtube-music-popcorn.mp4',
        // poster: '/02-corporate-imaging/videos/Summmit-Stockholm-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Youtube Music',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/02-corporate-imaging/videos/fifa.mp4',
        poster: '/02-corporate-imaging/posters/fifa.jpg',
        language: 'UK',
        format: 'video',
        title: 'FIFA',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/02-corporate-imaging/videos/colgate.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Colgate',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/02-corporate-imaging/videos/sdu.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'SDU',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/02-corporate-imaging/videos/migrate.mp4',
        poster: '/02-corporate-imaging/posters/migrate.jpg',
        language: 'DK',
        format: 'video',
        title: 'Migrate',
        description: 'Client',
        isPlaying: false
      },
    ]" />
    <Work />
  </div>
</template>

<script>
import Hero from '../../elements/Hero/Hero.vue';
import Media from '../../elements/Media/Media.vue';
import Work from '../../elements/Work/Work.vue';
export default {
  name: 'CorporateImaging',
  components: {
    Media,
    Hero,
    Work
  }
}
</script>

<style scoped>
</style>