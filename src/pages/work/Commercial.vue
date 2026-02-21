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
        title: 'Client: Colgate',
        description: 'Product: Max Whitening, Year: 2024',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/bedst-billigst.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Client: Bedst & Billigst',
        description: 'Product: Bedst & Billigst, Year: 2024',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/biotherm-BlueTherapyUplift-2022.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Client: Biotherm',
        description: 'Product: Blue Therapy Uplift, Year: 2022',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/danish-crown.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Client: Danish Crown',
        description: 'Product: Danish Crown, Year: 2024',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/hello-fresh.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Client: Hello Fresh',
        description: 'Product: Hello Fresh, Year: 2024',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/IF-forsikring.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Client: IF Forsikring',
        description: 'Product: IF Forsikring, Year: 2024',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/JET-5-sek.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Client: Just Eat',
        description: 'Product: App, Year: 2024',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/JET-10-sek.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Client: Just Eat',
        description: 'Product: App, Year: 2024',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/kvik.mp4',
        poster: '/01-commercial/videos/kvik-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Client: Kvik',
        description: 'Product: Samtalekøkkener, Year: 2024',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/lidl-plus-campaign-202.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Client: Lidl',
        description: 'Product: Skrab Plus, Year: 2024',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/notino.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Client: Notino',
        description: 'Product: Notino, Year: 2024',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/Oersted_kampagne.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Client: Ørsted',
        description: 'Product: Kampagne, Year: 2024',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/Oersted-2018.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Client: Ørsted',
        description: 'Product: Kampagne, Year: 2018',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/RPReplay.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Client: RPReplay',
        description: 'Product: Demo Reel, Year: 2024',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/01-commercial/videos/Skippers_Pipes_Vende_Piken_Forkert.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Client: Skippers Pipes',
        description: 'Product: Vende Piken Forkert, Year: 2024',
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