<template>
  <section class="horizontal-scroll-section" ref="scrollSection">
    <div class="horizontal-sticky">
      <div class="horizontal-inner" ref="horizontalInner">
        <div
          class="number"
          v-for="n in 7"
          :key="n"
          :style="getNumberStyle(n)"
          @click="openDialog(n)"
        >
          {{ n }}
        </div>
      </div>
    </div>
    <!-- Fullscreen Popover/modal dialog -->
    <div v-if="showDialog" class="fullscreen-dialog" @click.self="closeDialog">
      <div class="dialog-content">
        <button class="close-btn" @click="closeDialog">&times;</button>
        <slot :name="'popup' + dialogNumber" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Numbers",
  data() {
    return {
      progress: 0,
      inSection: false,
      showDialog: false,
      dialogNumber: null // Nummeret på popoveren
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
    openDialog(n) {
      this.dialogNumber = n;
      this.showDialog = true;
      document.body.style.overflow = 'hidden'; // Stop body-scroll
    },
    closeDialog() {
      this.showDialog = false;
      document.body.style.overflow = ''; // Tillad body-scroll igen
    },
    onKeyDown(e) {
      if (this.showDialog && e.key === "Escape") {
        this.closeDialog();
      }
    },
    getColor(proximity) {
      if (proximity > 0.8) return "var(--color-dark-blue)";
      if (proximity > 0.55) return "var(--color-light-blue)";
      if (proximity > 0.3) return "var(--color-gray-purple)";
      if (proximity > 0.13) return "var(--color-gray-orange)";
      return "var(--color-light-orange)";
    },
    getText(proximity) {
      if (proximity > 0.7) return "var(--color-almost-white)";
      return "var(--color-almost-black)";
    },
    getNumberStyle(n) {
      const spread = 0.12;
      const center = (n - 1) / 8;
      const proximity = Math.max(0, 1 - Math.abs(center - this.progress) / spread);

      if (!this.inSection) {
        return {
          transform: "scale(1)",
          background: "var(--color-light-orange)",
          color: "var(--color-almost-black)",
          zIndex: 1,
          transition:
            "transform 0.25s cubic-bezier(.42,1.8,.55,1), background 0.24s, color 0.17s",
        };
      }
      const maxScale = 2;
      const scale = 1 + proximity * (maxScale - 1);
      const background = this.getColor(proximity);
      const color = this.getText(proximity);

      return {
        transform: `scale(${scale})`,
        background,
        zIndex: Math.round(proximity * 100),
        color,
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
};
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
.number {
  flex: 0 0 auto;
  font-size: 20vw;
  font-weight: bold;
  background: var(--color-light-orange);
  border-radius: 1rem;
  padding: 1rem;
  width: 15vw;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  color: var(--color-almost-black);
}
.fullscreen-dialog {
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  min-width: 100vw;
  min-height: 100vh;
  background: rgba(0,0,0,0.88); /* Mørkere baggrund for popover */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.2s;
  overflow: auto;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.dialog-content {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: white;
  border: none;
  border-radius: 0;
  box-shadow: none;
  padding: 3rem 2rem 2rem 2rem;
  animation: dialogPop 0.22s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
}
@keyframes dialogPop {
  from { transform: scale(0.97); }
  to   { transform: scale(1); }
}
.close-btn {
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 3rem;
  font-weight: bold;
  cursor: pointer;
  background: transparent;
  color: #333;
  border: none;
  z-index: 10;
}
@media (max-width: 600px) {
  .dialog-content {
    padding: 1.3rem 0.4rem 2rem 0.4rem;
    font-size: 1.1rem;
  }
  .close-btn {
    top: 1rem;
    right: 1rem;
    font-size: 2.4rem;
  }
}
</style>
