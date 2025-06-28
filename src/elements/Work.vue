<template>

<div class="work">
    <div class="work-track">
      <div class="work-track-item" role="button" v-for="work in workItems" :key="work.id" @click="openModal(work)">
        <h2>{{ work.title }}</h2>
        <span>{{ work.number }}</span>
      </div>
    </div>

    <!-- Modal Component -->
    <Modal :visible="!!selectedItem" :item="selectedItem" @close="selectedItem = null">
      <template #default="{ item }">
        <div :style="{ 'background-color': item.backgroundColor, 'min-height': '100dvh' }">
            <divider :title="item.title" />
            <Media v-for="media in item.media" :key="item.id"
                :mediaType="media.mediaType"
                :mediaUrl="media.mediaUrl"
                :mediaDK="media.mediaDK"
                :mediaUK="media.mediaUK"
                :mediaFlagText="media.mediaFlagText"
                :mediaTitle="media.mediaTitle"
                :mediaText="media.mediaText"
            />

            <!-- <h1>{{ item.title }}</h1>
            <p>{{ item.description }}</p> -->
            <!-- Or render other dynamic fields -->
            </div>
      </template>
    </Modal>
  </div>

</template>

<script>
import workItems from '../data/work.json';
import Divider from './Divider.vue'
import Modal from './Modal.vue';
import Media from './Media.vue';

export default {
  name: 'Work',
  components: { Modal, Divider, Media },
  data() {
    return {
      workItems,
      selectedItem: null,
    };
  },
  methods: {
    openModal(work) {
      this.selectedItem = work;
    },
  },
};

</script>

<style>

.work {
    display: flex;
    background: var(--color-almost-white);
    /* overflow: clip; */
    padding: 0 60px
}

.work-track {
    display: flex;
    flex-direction: column;
    flex: 1 0 100%;
    gap: 40px;
    height: max-content;

    @media (min-width: 800px) {  
      flex-direction: row;
      width: max-content;
      height: unset;
      min-width: 100%;
      min-height: calc(100dvh - var(--divider-height));
      flex: unset;
    gap: unset;
    }
}

.work-track-item {
    position: relative;
    display: flex;
    flex: 1 0 20%;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;

    &:hover {
        z-index: 1;
        scale: 1.35;
        background: var(--color-light-orange, #22223A);
        
        &::after, &::before {
            height: 0;
        }
    }
    
    &:hover h2, &:hover span {
        color: var(--color-gray-orange, #FFFFFF);
    }

    @media (min-width: 800px) {
        &::after {
          content: "";
          position: absolute;
          right: 0;
          width: 1px;
          height: 100%;
          background: var(--dark-blue, #22223A);
          opacity: 0.1;
      }

      &::before {
          content: "";
          position: absolute;
          left: 0;
          width: 1px;
          height: 100%;
          background: var(--dark-blue, #22223A);
          opacity: 0.1;
      }   
    }
}

.work-track-item > h2 {
    color: var(--dark-blue, #22223A);
    text-align: center;
    font-family: "Bodoni Moda";
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.84px;
    text-transform: uppercase;
}

.work-track-item > span {
    color: var(--dark-blue, #22223A);
    text-align: center;
    font-family: "Bodoni Moda";
    font-size: clamp(200px, 22.5vw, 375px);
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    text-transform: uppercase;
}
</style>