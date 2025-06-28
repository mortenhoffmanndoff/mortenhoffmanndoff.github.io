<template>

  <div class="cb">
    <Divider title="Work" dividerBackground="bg-almost-white" />
    <Work />
    <Spacer spacerBackground="bg-almost-white" />
    <Divider title="Clients" dividerBackground="bg-light-orange" />
    <Marquee />
    <Spacer spacerBackground="bg-light-orange" />
  </div>
</template>

<script>

import Work from './elements/Work.vue';
import Marquee from './elements/Marquee.vue';
import Divider from './elements/Divider.vue';
import Spacer from './elements/Spacer.vue';

export default {
  components: { Work, Marquee, Divider, Spacer },
  
};

</script>

<style>

</style>