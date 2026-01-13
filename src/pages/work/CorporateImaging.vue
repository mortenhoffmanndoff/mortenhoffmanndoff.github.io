<template>
  <div class="corporate-imaging">
    <Hero class="corporate-imaging-hero" height="large" :textItems="['Authorative and', 'Generic Yet full of', '<strong>Identity</strong> and personality']"></Hero>
    <Hero 
      :textItems="['<strong>Corporate</strong>', '<strong>& Imaging</strong>']"
      height="small"
      textSize="xlarge"
    />
    <Media :mediaItems="[
      {
        type: 'video',
        src: '/02-corporate-imaging/videos/Superb - GXM Explainer - Full - DanishV2.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'DEMO REEL\n2024',
        description: 'My latest voice acting demo reel showcasing various character voices and commercial reads.',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/02-corporate-imaging/videos/Gajol_Intern2.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'DEMO REEL\n2024',
        description: 'My latest voice acting demo reel showcasing various character voices and commercial reads.',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/02-corporate-imaging/videos/ArlaJord_V03.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'UK',
        format: 'video',
        title: 'DEMO REEL\n2024',
        description: 'My latest voice acting demo reel showcasing various character voices and commercial reads.',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/02-corporate-imaging/videos/Damixa - DNA_film_Final_ENG.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'UK',
        format: 'video',
        title: 'DEMO REEL\n2024',
        description: 'My latest voice acting demo reel showcasing various character voices and commercial reads.',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/02-corporate-imaging/videos/FIFA-Training-Centre.mp4',
        poster: '/02-corporate-imaging/videos/FIFA-Training-Centre-poster.jpg',
        language: 'UK',
        format: 'video',
        title: 'DEMO REEL\n2024',
        description: 'My latest voice acting demo reel showcasing various character voices and commercial reads.',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/02-corporate-imaging/videos/30s_PodimoDK_Podcast_08.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'DEMO REEL\n2024',
        description: 'My latest voice acting demo reel showcasing various character voices and commercial reads.',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/02-corporate-imaging/videos/Imaging-Spotify-1.mp4',
        poster: '/02-corporate-imaging/videos/Imaging-Spotify-1-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'DEMO REEL\n2024',
        description: 'My latest voice acting demo reel showcasing various character voices and commercial reads.',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/02-corporate-imaging/videos/Imaging-Spotify-2.mp4',
        poster: '/02-corporate-imaging/videos/Imaging-Spotify-2-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'DEMO REEL\n2024',
        description: 'My latest voice acting demo reel showcasing various character voices and commercial reads.',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/02-corporate-imaging/videos/Summmit-Stockholm.mp4',
        poster: '/02-corporate-imaging/videos/Summmit-Stockholm-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'DEMO REEL\n2024',
        description: 'My latest voice acting demo reel showcasing various character voices and commercial reads.',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/02-corporate-imaging/videos/todaysfeature-miggrate-denmark.mp4',
        poster: '/02-corporate-imaging/videos/todaysfeature-miggrate-denmark-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'DEMO REEL\n2024',
        description: 'My latest voice acting demo reel showcasing various character voices and commercial reads.',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/02-corporate-imaging/videos/YTM_DeviceOrchestra_da_DK.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'DEMO REEL\n2024',
        description: 'My latest voice acting demo reel showcasing various character voices and commercial reads.',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/02-corporate-imaging/videos/YTM_Popcorn_da_DK.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'DEMO REEL\n2024',
        description: 'My latest voice acting demo reel showcasing various character voices and commercial reads.',
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