<template>
  <div class="cb">
    <!-- <Header /> -->
    <Hero />
    <Divider title="Work" dividerBackground="bg-almost-white" />
    <Work />
    <Spacer spacerBackground="bg-almost-white" />
    <Divider title="Clients" dividerBackground="bg-light-orange" />
    <Marquee />
    <Spacer spacerBackground="bg-light-orange" />
    <Image src="/src/assets/i-am.png" />
    <Divider title="i am Christina Bjørn" dividerBackground="" />
    <Article />
    <Spacer />
    <Image src="/src/assets/me.jpg" />
    <Divider title="Recommandations" dividerBackground="" />
    <Recommendations />
    <Spacer />
    <Footer />
  </div>
</template>

<script>

import Header from './elements/Header.vue';
import Work from './elements/Work.vue';
import Marquee from './elements/Marquee.vue';
import Divider from './elements/Divider.vue';
import Spacer from './elements/Spacer.vue';
import FullBackground from './elements/FullBackground.vue';
import Article from './elements/Article.vue';
import Recommendations from './elements/Recommendations.vue';
import Image from './elements/Image.vue';
import Hero from './elements/Hero.vue';
import Footer from './elements/Footer.vue';

export default {
  components: { 
    Header,
    Work, 
    Marquee, 
    Divider, 
    Spacer, 
    FullBackground, 
    Article, 
    Recommendations,
    Image,
    Hero,
    Footer
  },
  
};

</script>

<style>
</style>