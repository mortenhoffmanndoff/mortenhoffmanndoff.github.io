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
        src: '/01-commercial/videos/Colgate-Max-Whitening.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Colgate',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/bedst-billigst.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Bedst & Billigst',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/biotherm-BlueTherapyUplift-2022.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Biotherm',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/danish-crown.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Danish Crown',
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
        src: '/01-commercial/videos/IF-forsikring.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'IF Forsikring',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/JET-5-sek.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Just Eat',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/JET-10-sek.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Just Eat',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/kvik.mp4',
        poster: '/01-commercial/videos/kvik-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Kvik',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/lidl-plus-campaign-202.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Lidl',
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
        src: '/01-commercial/videos/Oersted_kampagne.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Ørsted',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/Oersted-2018.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Ørsted',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/RPReplay.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'RPReplay',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/Skippers_Pipes_Vende_Piken_Forkert.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Skippers Pipes',
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