<template>
  <div class="cb">

    <Header />
    <Hero />
    <Divider title="Work" />
    <WorkSticky />
    <Spacer />
    <Divider title="Clients" dividerBackground="bg-light-orange" />
    <Marquee />
    <Spacer spacerBackground="bg-light-orange" />
    <Image src="/image/i-am.png" />
    <Divider title="i am Christina Bjørn" dividerBackground="" />
    <Article />
    <Spacer />
    <Image src="/image/me.jpg" />
    <Divider title="Recommandations" dividerBackground="" />
    <Recommendations />
    <Spacer />
    <Footer />

  </div>
</template>

<script>

import Header from './elements/Header.vue';
import WorkSticky from './elements/WorkSticky.vue';
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
    WorkSticky,
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