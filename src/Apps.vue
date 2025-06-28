<template>
  <!-- <Header /> -->
  <Hero />
  <Divider title="Work" dividerBackground="" />
  <Numbers>
  <template #popup1>
    <h2>Popup 1</h2>
    <p>Her er special content til nummer 1!</p>
    <video width="400" playsinline autoplay muted loop>
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
  Your browser does not support HTML video.
</video>
  </template>
  <template #popup2>
    <h2>Popup 2</h2>
    <p>Alt kan vises! Billeder osv.</p>
    <img src="https://placekitten.com/400/220" style="width:100%" />
  </template>
  <template #popup3>
    <h2>Popup 3</h2>
  </template>
  
</Numbers>

  <Divider title="Clients" dividerBackground="bg-light-orange" />
  
  
  <Clients />

  
  <FullBackground image="/src/assets/i-am.png" />

  <Divider title="i am Christina Bjørn" dividerBackground="" />
  
  <div class="grid-container">
    <article>
      <p class="paragraph-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum quam sed eros volutpat, viverra auctor est dictum. Ut facilisis eros sit amet mi euismod, ut bibendum arcu mollis. Cras placerat turpis non mi porta laoreet. <br /> <br />
          Vestibulum ultrices rhoncus diam ac aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum eu ipsum ut dignissim. Quisque suscipit augue a dictum rhoncus. Mauris odio libero, pulvinar at accumsan et, pretium quis nibh. Quisque in purus tempor, <br /> <br />
      </p>
      <p class="paragraph-md">
          euismod nulla a, ullamcorper felis. Praesent consequat libero id enim consequat, non sollicitudin odio rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; <br /> <br />
          Maecenas quis dui vitae enim bibendum interdum sed in nunc. Duis ut erat dapibus, accumsan elit vitae, mollis quam. Praesent eget imperdiet sapien.
      </p>
    </article>
  </div>
  
  <Spacer />
  
  <FullBackground image="/src/assets/me.jpg" />

  <Divider title="Recommandations" dividerBackground="" />

  <div class="grid-container">
    <article class="testimonial">
      <blockquote>
        Christina er en super professionel og fleksibel speaker, som altid leverer! Let at arbejde med og med rigtig god indlevelse i teksten og opgaven.<br>
        <span class="cite">- Rasmus Schwenger, Producer hos Bauer Media</span>
      </blockquote>
      <blockquote>
        Bjørnen’ er en meget professionel og rutineret speaker, er god til at fornemme ’stilart’ i opgaven og leverer altid hurtigt og i topkvalitet.<br>
        <span class="cite">- Torben Johansen, ejer af “Lyd er Godt”</span>
      </blockquote>
      <blockquote>
        Christina selv og hendes smukke stemme med klar diktion og let til smil er altid en fornøjelse at arbejde med! Grundlyden på hendes speaks, optaget i eget studie, er super velegnede til videre forarbejdning i et mix.<br>
        <span class="cite">- Peter Krabbe Aagaard fra KRABBE sound&music</span>
      </blockquote>
      <blockquote>
        It was amazing working with Christina. Not only does she have an incredible voice but is a pleasure to work with. She is easygoing and super flexible which was what we needed when working on a lengthy and demanding project.<br>
        <span class="cite">- Sebastian Giraldo, Account Manager hos Voices.com Inc.</span>
      </blockquote>
    </article>
  </div>


<!-- <Spacer /> -->



</template>

<script>

import Clients from './components/Clients.vue';
import Hero from './components/Hero.vue';
import Numbers from './components/Numbers.vue';
import Header from './components/Header.vue'
import Divider from './elements/Divider.vue';
import Spacer from './elements/Spacer.vue';
import FullBackground from './components/FullBackground.vue';

export default {
  components: { Hero, Numbers, Clients, Header, Divider, Spacer, FullBackground },
}
</script>

<style scoped>

.grid-container {
  width: 100%;
  /* padding: 4vw 2vw; */
}

.testimonial {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 80px;
}

blockquote {
  position: relative;
  padding-left: 2.2em; /* Giv plads til mærket i venstre side */
  margin: 0;
  background: #f9f9f9;
  padding: 1.5rem 1.2rem;
  border-radius: 1rem;
  font-size: clamp(20px, 3vw, 32px);
  line-height: 1.6;
  margin: 0;
  box-shadow: 0 2px 8px #0001;

  text-indent: 1.6em;   
}

blockquote::before {
  content: "“";
  position: absolute;
  /* left: 0; */
  left: -0.3em;
  /* top: -0.4em; */
  font-size: 3.5em;        /* Størrelse på quote-mærket */
  color: #b55c2b;           /* Tilpas farve! */
  font-family: inherit;     /* Eller: Georgia, serif; */
  opacity: 0.18;            /* Let transparens for et subtilt look */
  line-height: 1;
  pointer-events: none;     /* Klik bare igennem */
}

.cite {
  display: block;
  margin-top: 1.2rem;
  color: #a39b8f;
  font-style: italic;
  font-size: clamp(14px, 2vw, 18px);
  text-indent: 0;
}

/* Responsiv */
@media (max-width: 700px) {
  .testimonial {
    grid-template-columns: 1fr;
  }
}


article {
  display: grid;
  gap: 4vw;
  margin: 0 auto;
}
article:has(> p:nth-child(2)) {
  grid-template-columns: repeat(2, 1fr);
}

article:has(> p:nth-child(3)) {
  grid-template-columns: repeat(3, 1fr);
}

.paragraph-md {
  font-size: clamp(20px, 3vw, 32px);
  line-height: 1.5;
  color: #2a2a2a;
}

.quote {
  font-size: clamp(20px, 3vw, 32px);
  line-height: 1.2;
  color: #2a2a2a;
  margin-bottom: 12px;
  quotes: "“" "”" "‘" "’";
  position: relative;
}

.author {
  font-size: clamp(14px, 2vw, 18px);
  color: #323232;
  font-family: inherit;
  opacity: 0.75;
  margin-left: 10px;
}


</style>
