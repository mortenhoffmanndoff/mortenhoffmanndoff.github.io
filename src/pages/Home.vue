<template>
  <div>
    
    <Hero 
     :imageSrc="'/images/2.png'"
      :textItems="['<strong>Leading</strong> ', 'voice talent', '<strong>of Denmark</strong>']"
      height="large"
      textSize="large"
      textCenter
      subheader="Native Danish &amp; international English in no time"
    />

    <Soundwave 
        audioSrc="/audio/danish-intro.mp3"
        audioSrcEn="/audio/english-intro.mp3"
        :size="120"
      />
    <Work id="work" />  

    <ParallaxImage :parallaxText="''" :imageSrc="'/images/image-7.png'" />
        
    <Hero 
      :textItems="['<strong>My</strong> voice', '<strong>is the</strong> sound', '<strong>of your</strong> brand']"
      height="small"
      textSize="large"
      class="bg-almost-white"
    />
    <Clients id="clients" class="" />

    <Article id="about" :articleContent="aboutText" class="bg-almost-white"/>

    <TextImageOverlay :line1="'Christina'" :line2="'Bjørn'" :imageSrc="'/images/image-5.png'" />
    
    <!-- <ParallaxImage :imageSrc="'/images/image-4.png'" /> -->

    <section class="recommendations-section bg-almost-white" style="margin-top: -25vh">
      <Hero
        :textItems="['Recommended by ','<strong>professionals</strong>', 'trusted by <strong>brands</strong>']"
        textSize="xlarge"
      />
      <Article id="recommendations" :articleContent="recommendationText" />
    </section>

  </div>
</template>

<script>
import Hero from '../elements/Hero/Hero.vue'
import Work from '../elements/Work/Work.vue'
import Clients from '../elements/Clients/Clients.vue'
import Article from '../elements/Article/Article.vue'
import ParallaxImage from '../elements/ParallaxImage/ParallaxImage.vue'
import Soundwave from '../elements/Soundwave/Soundwave.vue'
import TextImageOverlay from '../elements/TextImageOverlay/TextImageOverlay.vue'

export default {
  name: 'HomePage',
  components: {
    Hero,
    Work,
    Clients,
    Article,
    ParallaxImage,
    Soundwave,
    TextImageOverlay,
  },
  data() {
    return {
      aboutText: `
        I’ve been in love with sound since the age of six. <br>
        The black piano quickly became my closest friend, and it soon revealed that I have “absolute pitch”. When learning a Beethoven piece, I only needed to run through the notes once - after that, the music stayed with me.
        At that moment sound became my profession.<br><br>
        At 19, I began working professionally with voice and communication - as a voice talent, radio host, presenter, TV host, actor and dubbing artist. In both Danish and English.<br>
        In 2006, I completed my education as a copywriter, gaining a strong foundation in branding and audience impact. This knowledge shapes each project, ensuring every voice performance hits the mark without adding extra costs..<br>
        Over the years, I’ve collaborated with a wide range of brands and hosted major live shows on some of the largest stages of Denmark. That experience and authenticity is part of the package - whether I’m your voice, your face or both.<br>
        Today, my primary focus is voice work. With more than 200 projects each year, I know exactly what it takes to connect, resonate and leave a mark. You can choose a full-service production - or stay closely involved throughout the process.
      `,

      recommendationText: `
        "Christina is a super professional and flexible speaker who always delivers! Easy to work with and with really good empathy for the text and the task." <br>
        <b>Rasmus Schwenger, Producer at Bauer Media</b>
        <br><br><br><br>
        "Bjørnen' is a very professional and experienced speaker, is good at sensing 'style' in the assignment and always delivers quickly and in top quality." <br>
        <b>Torben Johansen, owner of "Lyd er Godt"</b>
        <br><br><br><br>
        "Christina herself and her beautiful voice with clear diction and easy smile are always a pleasure to work with! The basic sound of her speaks, recorded in her own studio, is super suitable for further processing in a mix." <br>
        <b>Peter Krabbe Aagaard from KRABBE sound&music</b>
        <br><br><br><br>
        "It was amazing working with Christina. Not only does she have an incredible voice but is a pleasure to work with. She is easygoing and super flexible which was what we needed when working on a lengthy and demanding project." <br>
        <b>Sebastian Giraldo, Account Manager at Voices.com Inc.</b>
      `,
    }
  }
}
</script>

<style scoped>
.recommendations-section {
  display: flex;
  flex-direction: column;
}

@media (min-width: 1024px) {
  .recommendations-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 60px 0;
    /* min-height: 100vh;
    align-items: stretch; */
  }

  .recommendations-section :deep(.hero) {
    width: 100%;
    height: 100%;
    position: sticky;
    top: 0;
  }

  .recommendations-section :deep(.hero .hero-text-item.xlarge) {
    font-size: clamp(28px, 5vw, 100px);
  }

  .recommendations-section :deep(.article) {
    padding: 60px 60px 60px 40px;
    display: flex;
    align-items: center;
  }

  .recommendations-section :deep(.article .article-content) {
    font-size: clamp(14px, 1.3vw, 26px);
    line-height: 1.5;
  }
}

/* Responsive Home */
@media (max-width: 1023px) {
  .recommendations-section {
    margin-top: -10vh;
  }

  .recommendations-section :deep(.hero) {
    height: auto;
    min-height: 30vh;
  }

  .recommendations-section :deep(.article) {
    padding: 30px 24px;
  }

  .recommendations-section :deep(.article .article-content) {
    font-size: clamp(18px, 3.2vw, 24px);
    line-height: 1.6;
  }
}

@media (max-width: 480px) {
  .recommendations-section {
    margin-top: -5vh;
  }

  .recommendations-section :deep(.hero) {
    min-height: 25vh;
  }

  .recommendations-section :deep(.article) {
    padding: 24px 20px;
  }

  .recommendations-section :deep(.article .article-content) {
    font-size: clamp(17px, 4.5vw, 21px);
    line-height: 1.6;
  }
}
</style>