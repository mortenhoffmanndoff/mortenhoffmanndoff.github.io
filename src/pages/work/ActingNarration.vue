<template>
  <div class="acting-narration">
    <!-- <Hero class="acting-narration-hero" height="large" :textItems="['<strong>Character</strong> work off', 'and on screen. My', 'Voice has many <strong>Faces</strong>']"></Hero> -->
    <Hero class="acting-narration-hero" height="large" :textSize="'xlarge'" :textItems="['Acting &amp;', 'Narration']"></Hero>
    <Hero 
      :textItems="['Character <strong>work off</strong>', '<strong>and on screen. My</strong>', 'Voice <strong>has many</strong> Faces']"
      height="small"
      textSize="small"
    />
    <Media :mediaItems="[
      {
        type: 'video',
        src: '/03-acting-narration/videos/Kia_Klip4_OzlemSpeak_v001.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Client: Kia',
        description: 'Product: Den nye Niro EV, Year: 2024',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/03-acting-narration/videos/RF21_2min_ENG_SRT.mp4',
        poster: '/03-acting-narration/videos/RF21_2min_ENG_SRT-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Client: TrygFonden',
        description: 'Product: Røgfri Fremtid, Year: 2024',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/03-acting-narration/videos/Christina_imorgen_6757.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Client: Klasselotteriet',
        description: 'Product: Klasselotteriet, Year: 2024',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/03-acting-narration/videos/RPReplay_Final1747820204.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Client: RPReplay',
        description: 'Product: Voice, Year: 2024',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/03-acting-narration/videos/RPReplay_Final1747820699-2.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Client: RPReplay',
        description: 'Product: Voice, Year: 2024',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/03-acting-narration/videos/291F74E9-BBDD-4C5C-A750-36E30390F8FF.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DE',
        format: 'video',
        title: 'Client: News?',
        description: 'Product: Voice, Year: 2024',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/03-acting-narration/videos/AF208745-7358-4BFA-8BD2-1FD9E683DBD3.mp4',
        poster: '/03-acting-narration/videos/AF208745-7358-4BFA-8BD2-1FD9E683DBD3-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Client: Radio24syv',
        description: 'Product: Drik med respekt, Year: 2024',
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
  name: 'ActingNarration',
  components: {
    Media,
    Hero,
    Work
  }
}
</script>

<style scoped>
</style>