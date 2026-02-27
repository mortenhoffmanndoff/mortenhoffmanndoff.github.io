<template>
  <div class="commercial">
    <!-- <Hero :mediumText="true" class="commercial-hero" height="large" :textItems="['Make each <strong>word</strong> count', 'Loud and clear with a', '<strong>Pleasant delivery.</strong>']"></Hero> -->
    <Hero :textSize="'xlarge'" class="commercial-hero" height="large" :textItems="['Commercials']"></Hero>
    <Hero 
      :textItems="['<strong>Make each</strong> word <strong>count</strong>', '<strong>Loud and clear with a</strong>', 'Pleasant delivery.']"
      height="small"
      textSize="small"
    />
    <Media :mediaItems="[
      {
        type: 'video',
        src: '/01-commercial/videos/e-cards.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'E-cards',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/hello-fresh.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Hello Fresh',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/skippers-pipes.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Skipper\'s Pipes',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/notino.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Notino',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/corny-0.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Corny 0%',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/oersted.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Ørsted',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/biotherm.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Biotherm',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/if-forsikring.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'IF Forsikring',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/just-eat.mp4',
        // poster: '/01-commercial/videos/just-eat-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Just Eat',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/kvik.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Kvik',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/lidl-plus.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Lidl',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/spotify.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Spotify',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/podimo.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Podimo',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/somersby.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Somersby',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/samlino.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Samlino',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/bwt.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'BWT',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/marabou.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Marabou',
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
  name: 'Commercial',
  components: {
    Media,
    Hero,
    Work
  }
}
</script>

<style scoped>
</style>