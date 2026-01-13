<template>
  <div>
    
    <Hero
      :textItems="['<strong>Leading</strong> ', 'voice talent', '<strong>of</strong> Denmark']"
      imageSrc="/images/Home2.png"
      height="large"
      textSize="large"
    />

    
    <Soundwave 
        audioSrc="/audio/intro-dansk.wav"
        :size="120"
      />
    <Work id="work" />  
      
    <TextImageOverlay 
      :line1="'Christina'"
      :line2="'Bjørn'"
      :imageSrc="'/images/image-5.png'" 
    />


    <Hero 
      :textItems="['My <strong>voice</strong>', 'is the <strong>sound</strong>', 'of your <strong>brand</strong>']"
      height="large"
      textSize="xlarge"
      class=""
      style="margin-top: -50vh"
    />
    <Article id="about" :articleContent="aboutText" class="" />
    <ParallaxImage :parallaxText="''" :imageSrc="'/images/image-7.png'" />
    <Clients id="clients" class="" />
    <ParallaxImage :imageSrc="'/images/image-4.png'" />
    <Hero class="bg-almost-white"
      :textItems="['Recommended by ','<strong>professionals</strong>', 'trusted by <strong>brands</strong>']"
      height="large"
      textSize="xlarge"
    />
    <Article id="recommendations" :articleContent="recommendationText" class="bg-almost-white" />

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
        Siden jeg var seks år gammel, har jeg interesseret mig for lyd. Allerede dengang opdagede 'man', at jeg havde absolut gehør. Hvis jeg spillede en af Beethovens store værker på det sorte flygel, så brugte jeg noderne en enkelt gang, for derefter at kunne det udenad. Jeg syntes ikke, det var noget særligt dengang, men lyd skulle vise sig at blive min levevej. <br>
        Da jeg flyttede hjemmefra som 19-årig begyndte jeg at formidle budskaber foran en mikrofon eller et kamera - som speaker, radiovært, konferencier, TV-vært, skuespiller og dubber. På både dansk og engelsk. Derudover færdiggjorde jeg i 2006 uddannelsen som tekstforfatter, og har derfor også en masse ´knowledge´ fra bureauverdenen. <br>
        Gennem årene har jeg lagt stemme til nogle af verdens største brands og været vært for shows på landets største live-scener, såsom Plænen i Tivoli, Rådhuspladsen i København og Studie 5 i DR Byen. Den erfaring, det overblik og den ro får du med i pakken hos mig, hvad end du booker mig som stemme og/eller ansigt. <br>
        I dag er jeg i begyndelsen af 40'erne og fokuserer primært på stemmen. Hos mig får dit projekt den opmærksomhed, det fortjener med min professionelle lyd og autenticitet. <br>
        Med 200+ årlige speak-opgaver - og i øvrigt en baggrund som tekstforfatter - ved jeg præcist, hvad der skal til, for at få dit budskab ud over rampen. <br>
        Overlad produktionen til mig - eller vær med i processen online eller i et lydstudie nær dig.<br>
        Lad os sammen give dit budskab en lyd i særklasse!</br>
        Få en pris eller en gratis demo her (LINK til kontakt-siden)
      `,

      recommendationText: `
        "Christina er en super professionel og fleksibel speaker, som altid leverer! Let at arbejde med og med rigtig god indlevelse i teksten og opgaven." <br>
        <b>Rasmus Schwenger, Producer hos Bauer Media</b>
        <br><br><br><br>
        "Bjørnen' er en meget professionel og rutineret speaker, er god til at fornemme 'stilart' i opgaven og leverer altid hurtigt og i topkvalitet." <br>
        <b>Torben Johansen, ejer af "Lyd er Godt"</b>
        <br><br><br><br>
        "Christina selv og hendes smukke stemme med klar diktion og let til smil er altid en fornøjelse at arbejde med! Grundlyden på hendes speaks, optaget i eget studie, er super velegnede til videre forarbejdning i et mix." <br>
        <b>Peter Krabbe Aagaard fra KRABBE sound&music</b>
        <br><br><br><br>
        "It was amazing working with Christina. Not only does she have an incredible voice but is a pleasure to work with. She is easygoing and super flexible which was what we needed when working on a lengthy and demanding project." <br>
        <b>Sebastian Giraldo, Account Manager hos Voices.com Inc.</b>
      `,
    }
  }
}
</script>