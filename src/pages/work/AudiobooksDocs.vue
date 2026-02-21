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
        src: '/04-audiobooks-docs/videos/290EA4D3-8474-4E7F-8692-B36B50E9432D.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'DEMO REEL\n2024',
        description: 'My latest voice acting demo reel showcasing various character voices and commercial reads.',
        isPlaying: false
      },      
      {
        type: 'video',
        src: '/04-audiobooks-docs/videos/A268EC2B-32AF-4DC6-94CB-09FC5C39D475.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'DEMO REEL\n2024',
        description: 'My latest voice acting demo reel showcasing various character voices and commercial reads.',
        isPlaying: false
      },      
      {
        type: 'video',
        src: '/04-audiobooks-docs/videos/F5E2D033-2BB4-429C-9323-5EB79BCAE774.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'DEMO REEL\n2024',
        description: 'My latest voice acting demo reel showcasing various character voices and commercial reads.',
        isPlaying: false
      },      
      {
        type: 'video',
        src: '/04-audiobooks-docs/videos/FDEA27F0-0013-4B04-A65B-8DBB9B2631BC.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'DEMO REEL\n2024',
        description: 'My latest voice acting demo reel showcasing various character voices and commercial reads.',
        isPlaying: false
      },      
      {
        type: 'video',
        src: '/04-audiobooks-docs/videos//ScreenRecording_06-10-2025-15-50-33_1.mp4',
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