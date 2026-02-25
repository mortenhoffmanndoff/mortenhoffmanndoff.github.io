<template>
  <div class="text-image-overlay" ref="container">
    <div class="text-section">
      <h1 class="large-text">
        <span class="line-1">{{ line1 }}</span>
        <span class="line-2">{{ line2 }}</span>
      </h1>
    </div>
    <div class="image-section" ref="imageSection">
      <img :src="imageSrc" alt="" />
    </div>
  </div>
</template>

<script>
import { animate, scroll } from "motion";

export default {
  name: 'TextImageOverlay',
  props: {
    line1: {
      type: String,
      default: 'Christina'
    },
    line2: {
      type: String,
      default: 'Bjørn'
    },
    imageSrc: {
      type: String,
      required: true
    }
  },
  mounted() {
    // Animate the image to move up over the text on scroll
    const imageAnimation = animate(
      this.$refs.imageSection,
      { transform: ["translateY(20vh)", "translateY(-50vh)"] },
      { ease: "linear" }
    );

    scroll(imageAnimation, {
      target: this.$refs.container,
      offset: ["start end", "end center"]
    });
  }
}
</script>

<style scoped>
.text-image-overlay {
  position: relative;
  min-height: 140vh;
  display: flex;
  flex-direction: column;
  overflow: visible;
}

.text-section {
  position: relative;
  z-index: 2;
  padding: 10vh 5vw 5vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  /* background: #e8e4df; */
}

.large-text {
  margin: 0;
  padding: 0;
  line-height: 0.85;
  text-align: center;
  display: flex;
  flex-direction: column;
  font-family: "Roslindale Display Condensed";
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

.line-1,
.line-2 {
  display: block;
  /* font-size: clamp(60px, 15vw, 220px); */
    font-size: clamp(60px, 20vw, 400px);
  font-weight: 400;
}

.image-section {
  position: relative;
  z-index: 1;
  width: 100%;
  /* height: 80vh;
  margin-top: -10vh; */
  overflow: hidden;

      display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 40px;  
}

.image-section img {
  width: 50vw;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

@media (max-width: 768px) {
  .text-section {
    padding: 6vh 5vw 3vh;
  }
  
  .image-section {
    height: 60vh;
  }

  .image-section img {
    width: 85vw;
  }
}

@media (max-width: 1023px) {
  .text-image-overlay {
    min-height: 100vh;
  }

  .line-1,
  .line-2 {
    font-size: clamp(50px, 18vw, 180px);
  }
}

@media (max-width: 480px) {
  .text-image-overlay {
    min-height: 80vh;
  }

  .text-section {
    padding: 5vh 4vw 2vh;
  }

  .line-1,
  .line-2 {
    font-size: clamp(40px, 16vw, 120px);
  }

  .image-section img {
    width: 92vw;
  }
}
</style>
