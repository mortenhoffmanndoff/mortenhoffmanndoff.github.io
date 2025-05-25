<template>
  <Header />
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
  <!-- osv. -->
</Numbers>

  <Divider title="Clients" dividerBackground="bg-light-orange" />
  <Clients />
  <img src="./assets/i-am.png" alt="" class="img-responsive" />
  <Divider title="i am christina bjørn" dividerBackground="" />
  
  <div class="container">
    <div class="column">
      <div class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum quam sed eros volutpat, viverra auctor est dictum. Ut facilisis eros sit amet mi euismod, ut bibendum arcu mollis. Cras placerat turpis non mi porta laoreet.
      </div>
      <div class="text">
        Vestibulum ultrices rhoncus diam ac aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum eu ipsum ut dignissim. Quisque suscipit augue a dictum rhoncus. Mauris odio libero, pulvinar at accumsan et, pretium quis nibh. Quisque in purus tempor,
      </div>
    </div>
    <div class="column">
      <div class="text">
        euismod nulla a, ullamcorper felis. Praesent consequat libero id enim consequat, non sollicitudin odio rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
      </div>
      <div class="text">
        Maecenas quis dui vitae enim bibendum interdum sed in nunc. Duis ut erat dapibus, accumsan elit vitae, mollis quam. Praesent eget imperdiet sapien.
      </div>
    </div>
  </div>

  <Spacer />
  
  <img src="./assets/me.jpg" class="img-responsive" alt="">
  
  <Divider title="Recommandations" dividerBackground="" />

  <div class="grid-container">
  <div class="testimonial">
    <div class="quote">“ Christina er en super professionel og fleksibel speaker, som altid leverer! Let at arbejde med og med rigtig god indlevelse i teksten og opgaven.</div>
    <div class="author">- Rasmus Schwenger, Producer hos Bauer Media</div>
  </div>
  <div class="testimonial">
    <div class="quote">“ Bjørnen’ er en meget professionel og rutineret speaker, er god til at fornemme ’stilart’ i opgaven og leverer altid hurtigt og i topkvalitet.</div>
    <div class="author">- Torben Johansen, ejer af “Lyd er Godt”</div>
  </div>
  <div class="testimonial">
    <div class="quote">“ Christina selv og hendes smukke stemme med klar diktion og let til smil er altid en fornøjelse at arbejde med! Grundlyden på hendes speaks, optaget i eget studie, er super velegnede til videre forarbejdning i et mix.</div>
    <div class="author">- Peter Krabbe Aagaard fra KRABBE sound&music</div>
  </div>
  <div class="testimonial">
    <div class="quote">“ It was amazing working with Christina. Not only does she have an incredible voice but is a pleasure to work with. She is easygoing and super flexible which was what we needed when working on a lengthy and demanding project.</div>
    <div class="author">- Sebastian Giraldo, Account Manager hos Voices.com Inc.</div>
  </div>
</div>

<Spacer />



</template>

<script>

import Clients from './components/Clients.vue';
import Hero from './components/Hero.vue';
import Numbers from './components/Numbers.vue';
import Header from './components/Header.vue'
import Divider from './components/Divider.vue';
import Spacer from './components/Spacer.vue';

export default {
  components: { Hero, Numbers, Clients, Header, Divider, Spacer },
}
</script>

<style scoped>

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 32px;
  max-width: 1500px;
  margin: 0 auto;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.text {
  font-size: clamp(20px, 3vw, 32px);
  line-height: 1.2;
  color: #2a2a2a;
}

@media (max-width: 900px) {
  .container {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

@media (max-width: 600px) {
  .text {
    font-size: clamp(16px, 5vw, 22px);
  }
}



/* 
 */


.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px 32px;
  max-width: 1500px;
  margin: 0 auto;
}

.testimonial {
  background: transparent;
  padding: 0;
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

@media (max-width: 900px) {
  .grid-container {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

@media (max-width: 600px) {
  body {
    padding: 10px;
  }
  .quote {
    font-size: clamp(16px, 5vw, 22px);
  }
  .author {
    font-size: clamp(12px, 4vw, 16px);
  }
}


</style>
