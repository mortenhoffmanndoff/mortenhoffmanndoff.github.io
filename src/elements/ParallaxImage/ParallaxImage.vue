<template>
  <div class="parallax-container">
    <div class="parallax-image" ref="parallaxImage">
      <img :src="imageSrc" alt="Parallax Background" />
    </div>
    <div v-if="parallaxText" class="parallax-content">
      <h2>{{ parallaxText }}</h2>
    </div>
  </div>
</template>

<script>
import { animate, scroll } from "motion";

export default {
  name: 'ParallaxImage',
  props: {
    imageSrc: {
      type: String,
    },
    parallaxText: {
      type: String,
    }
  },
  mounted() {
    // Target this specific parallax instance using $refs and $el
    const para = animate(this.$refs.parallaxImage,
      { transform: ["translateY(-50vh)", "translateY(50vh)"] },
      { ease: "easeOut" }
    )

    scroll(para, {
      target: this.$el,
      offset: ["start end", "end start"]
    })
  }
}
</script>

<style scoped>
.parallax-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.parallax-image {
  position: absolute;
  top: -18%;
  left: 0;
  width: 100%;
  height: 120%;
  z-index: 1;
}

.parallax-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.parallax-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 40px;
  border-radius: 10px;
  text-transform: uppercase;
}

.parallax-content h2 {
  font-size: clamp(40px, 6vw, 80px);
  margin: 0 0 20px 0;
  font-weight: 900;
}

.parallax-content p {
  font-size: 18px;
  margin: 0;
}
</style>