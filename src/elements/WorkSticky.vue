<template>
    <section class="horizontal-scroll-section" ref="scrollSection">
      <div class="horizontal-sticky">
        <div class="horizontal-inner" ref="horizontalInner">
          <div class="work-sticky" v-for="work in workItems" :key="work.id" @click="openModal(work)" :style="getNumberStyle(work.number)">
            <span class="work-sticky-number">{{ work.number }}</span>
            <h2 class="work-sticky-title">{{ work.title }}</h2>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal Component -->
    <Modal :visible="!!selectedItem" :item="selectedItem" @close="selectedItem = null">
      <template #default="{ item }">
        <div :style="{ 'background-color': item.backgroundColor, 'min-height': '100dvh' }">
          
            <img :src="item.stage" class="img-responsive" :alt="'Christina Bjørn - ' + item.title" />
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
</template>

<script>

import workItems from '../data/work.json';
import Divider from './Divider.vue'
import Modal from './Modal.vue';
import Media from './Media.vue';

export default {
  name: 'WorkSticky',

  components: { Modal, Divider, Media },

  data() {
    return {
      progress: 0,
      inSection: false,
      workItems,
      selectedItem: null,
    };
  },

  mounted() {
    const section = this.$refs.scrollSection;
    const horizontalInner = this.$refs.horizontalInner;
    const horizontalScrollLength = horizontalInner.scrollWidth - window.innerWidth;
    const scrollAreaHeight = window.innerHeight + horizontalScrollLength * 2;
    section.style.height = `${scrollAreaHeight}px`;

    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("keydown", this.onKeyDown); // Til ESC-lukning
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
    window.removeEventListener("keydown", this.onKeyDown);
  },
  methods: {
    openModal(work) {
      this.selectedItem = work;
    },
    getColor(proximity) {
      if (proximity > 0.8) return "var(--color-light-orange)";
      if (proximity > 0.13) return "var(--color-light-orange)";
      return "var(--color-almost-white)";
    },
    getText(proximity) {
      if (proximity > 0.8) return "var(--color-gray-orange)";
      if (proximity > 0.13) return "var(--color-gray-orange)";
      return "var(--color-dark-blue)";
    },
    getNumberStyle(n) {
    //   const spread = 0.06;
      const spread = 0.1;
    //   const spread = 0.12;
    //   const spread = 0.14;
      const center = (n - 1) / 7;
      const proximity = Math.max(0, 1 - Math.abs(center - this.progress) / spread);

      if (!this.inSection) {
        return {
          transform: "scale(1)",
          background: "var(--color-almost-white)",
          color: "var(--color-dark-blue)",
          zIndex: 1,
          transition:
            "transform 0.25s cubic-bezier(.42,1.8,.55,1), background 0.24s, color 0.17s",
        };
      }
      const maxScale = 1.75;
      const scale = 1 + proximity * (maxScale - 1);
      const background = this.getColor(proximity);
      const color = this.getText(proximity);

      return {
        transform: `scale(${scale})`,
        background,
        color,
        zIndex: Math.round(proximity * 100),
        transition:
          "transform 0.25s cubic-bezier(.42,1.8,.55,1), background 0.24s, color 0.17s",
      };
    },
    onScroll() {
      const section = this.$refs.scrollSection;
      const horizontalInner = this.$refs.horizontalInner;
      const horizontalScrollLength = horizontalInner.scrollWidth - window.innerWidth;
      const scrollAreaHeight = window.innerHeight + horizontalScrollLength * 2;
      const sectionTop = section.offsetTop;
      const scrollY = window.scrollY;
      const startScroll = sectionTop;
      const endScroll = sectionTop + scrollAreaHeight - window.innerHeight;

      this.inSection = scrollY >= startScroll && scrollY <= endScroll;

      if (scrollY < startScroll) {
        horizontalInner.style.transform = "translateX(0)";
        this.progress = 0;
      } else if (scrollY > endScroll) {
        horizontalInner.style.transform = `translateX(-${horizontalScrollLength}px)`;
        this.progress = 1;
      } else {
        const progress = (scrollY - startScroll) / (scrollAreaHeight - window.innerHeight);
        const translateX = progress * horizontalScrollLength;
        horizontalInner.style.transform = `translateX(-${translateX}px)`;
        this.progress = progress;
      }
    }
  },
}
</script>

<style scoped>

.horizontal-scroll-section {
  position: relative;
  width: 100%;
}

.horizontal-sticky {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    background: white;
  z-index: 2;
}

.horizontal-inner {
  display: flex;
  gap: 2vw;
  will-change: transform;
  align-items: center;
  height: 100vh;
}

.work-sticky {
  flex: 0 0 20%;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  height: 100%;

  
    &:hover {
        .work-sticky-number {
            transform: translateY(40px);
            color: var(--color-gray-orange);
        }
        .work-sticky-title {
            transform: translateY(40px);
            color: var(--color-gray-orange);  
        }
    }
  

  .work-sticky-title {
    color: var(--dark-blue, #22223A);
    text-align: center;
    font-family: "Bodoni Moda";
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.84px;
    text-transform: uppercase;
    transition: all .25s ease;
  }

  .work-sticky-number {
    color: var(--dark-blue, #22223A);
    text-align: center;
    font-family: "Bodoni Moda";
    font-size: clamp(200px, 22.5vw, 375px);
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    text-transform: uppercase;
    transition: all .25s ease;
  }
}
</style>