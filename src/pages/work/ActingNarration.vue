<template>
  <div class="acting-narration">
    <Hero class="acting-narration-hero" height="large" :textItems="['<strong>Character</strong> work off', 'and on screen. My', 'Voice has many <strong>Faces</strong>']"></Hero>
    <Hero 
      :textItems="['<strong>Acting &</strong>', '<strong>Narration</strong>']"
      height="small"
      textSize="xlarge"
    />
    <Media :mediaItems="[
      {
        type: 'video',
        src: '/03-acting-narration/videos/Kia_Klip4_OzlemSpeak_v001.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'DEMO REEL\n2024',
        description: 'My latest voice acting demo reel showcasing various character voices and commercial reads.',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/03-acting-narration/videos/RF21_2min_ENG_SRT.mp4',
        poster: '/03-acting-narration/videos/RF21_2min_ENG_SRT-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'DEMO REEL\n2024',
        description: 'My latest voice acting demo reel showcasing various character voices and commercial reads.',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/03-acting-narration/videos/Christina_imorgen_6757.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'DEMO REEL\n2024',
        description: 'My latest voice acting demo reel showcasing various character voices and commercial reads.',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/03-acting-narration/videos/RPReplay_Final1747820204.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'DEMO REEL\n2024',
        description: 'My latest voice acting demo reel showcasing various character voices and commercial reads.',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/03-acting-narration/videos/RPReplay_Final1747820699-2.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'DEMO REEL\n2024',
        description: 'My latest voice acting demo reel showcasing various character voices and commercial reads.',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/03-acting-narration/videos/291F74E9-BBDD-4C5C-A750-36E30390F8FF.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DE',
        format: 'video',
        title: 'DEMO REEL\n2024',
        description: 'My latest voice acting demo reel showcasing various character voices and commercial reads.',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/03-acting-narration/videos/AF208745-7358-4BFA-8BD2-1FD9E683DBD3.mp4',
        poster: '/03-acting-narration/videos/AF208745-7358-4BFA-8BD2-1FD9E683DBD3-poster.jpg',
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