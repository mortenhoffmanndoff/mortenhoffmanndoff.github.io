<template>
  <div class="audiobooks-docs">
    <!-- <Hero class="audiobooks-docs-hero" height="large" :textItems="['Bring <strong>Stories</strong>', 'to life and make', 'them shine']"></Hero> -->
    <Hero class="audiobooks-docs-hero" :textSize="'xlarge'" height="large" :textItems="['Audiobooks', '& Docs']"></Hero>
    <Hero
      :textItems="['<strong>Bring</strong> Stories', '<strong>to life and make</strong>', '<strong>them shine</strong>']"
      height="small"
      textSize="small"
    />
    <Media :mediaItems="[
      {
        type: 'video',
        src: '/04-audiobooks-docs/videos/huden-kan-selv.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Huden kan selv',
        description: 'Client: Gyldendal',
        isPlaying: false
      },      
      {
        type: 'video',
        src: '/04-audiobooks-docs/videos/hvordan-man-er-et-godt-menneske.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Hvordan man er et godt menneske',
        description: 'Client: Politiken',
        isPlaying: false
      },      
      {
        type: 'video',
        src: '/04-audiobooks-docs/videos/dating-for-begyndere.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Dating for begyndere',
        description: 'Client: Flamingo',
        isPlaying: false
      },      
      {
        type: 'video',
        src: '/04-audiobooks-docs/videos/jeg-vaelger-at-leve.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Jeg vælger at leve',
        description: 'Client: Bazar',
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
  name: 'AudiobooksDocs',
  components: {
    Media,
    Hero,
    Work
  }
}
</script>

<style scoped>
</style>