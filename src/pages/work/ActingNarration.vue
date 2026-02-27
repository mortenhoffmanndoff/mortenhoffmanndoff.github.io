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
        src: '/03-acting-narration/videos/kia.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Kia',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/03-acting-narration/videos/rippaverse.mp4',
        // poster: '/03-acting-narration/videos/RF21_2min_ENG_SRT-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Rippaverse Comics',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/03-acting-narration/videos/tuborg-classic.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Tuborg Classic',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/03-acting-narration/videos/heute-show.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DE',
        format: 'video',
        title: 'Heute Show (RTL)',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/03-acting-narration/videos/trygfonden.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'TrygFonden',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/03-acting-narration/videos/klasselotteriet.mp4',
        // poster: '/images/demo-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Klasselotteriet',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/03-acting-narration/videos/enchantimals.mp4',
        // poster: '/03-acting-narration/videos/AF208745-7358-4BFA-8BD2-1FD9E683DBD3-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Enchantimals',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/03-acting-narration/videos/fredagsfesten.mp4',
        // poster: '/03-acting-narration/videos/AF208745-7358-4BFA-8BD2-1FD9E683DBD3-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Fredagsfesten',
        description: 'Client',
        isPlaying: false
      },
      {
        type: 'video',
        src: '/03-acting-narration/videos/husk-lige-tandboersten.mp4',
        // poster: '/03-acting-narration/videos/AF208745-7358-4BFA-8BD2-1FD9E683DBD3-poster.jpg',
        language: 'DK',
        format: 'video',
        title: 'Husk Lige Tandbørsten',
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