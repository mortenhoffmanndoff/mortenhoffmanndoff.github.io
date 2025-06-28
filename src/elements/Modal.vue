<template>
  <transition name="modal-zoom">
    <div class="modal" v-if="visible" @click.self="$emit('close')">
      <div class="modal-content">
        <button class="modal-close" @click="$emit('close')" aria-label="Close modal">
          <svg width="112" height="107" viewBox="0 0 112 107" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="52" cy="52" r="51.5" transform="matrix(-1 0 0 1 108 2)" stroke="#22223A"/>
            <path d="M56 1C25.5808 1 1 24.5476 1 53.5C1 82.4524 25.5808 106 56 106C86.4192 106 111 82.4524 111 53.5C111 24.5476 86.4192 1 56 1Z" stroke="#22223A" stroke-width="2"/>
            <line x1="64.2635" y1="46.7071" x2="48.7072" y2="62.2635" stroke="#22223A" stroke-width="2"/>
            <line x1="63.849" y1="62.2635" x2="48.2927" y2="46.7072" stroke="#22223A" stroke-width="2"/>
          </svg>

        </button>
        <slot :item="item" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    visible: Boolean,
    item: Object,
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        document.addEventListener('keydown', this.onEscape);
      } else {
        document.removeEventListener('keydown', this.onEscape);
      }
    },
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.onEscape);
  },
  methods: {
    onEscape(e) {
      if (e.key === 'Escape') {
        this.$emit('close');
      }
    },
  },
};
</script>


<style scoped>

.modal {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
    position: relative;
    background: white;
    height: 100%;
    width: 100%;
    overflow: auto;
    transform-origin: center;
    border-radius: 12px;
    box-sizing: border-box;
}

/* Close Button */
.modal-close {
  position: absolute;
  top: 36px;
  right: 54px;
  background: transparent;
  border: none;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  color: #333;
  transition: color 0.2s ease;
  /* animation: rotate 1s linear infinite; */
}

.modal-close:hover {
  color: #000;
}

/* Modal zoom animation */
.modal-zoom-enter-active,
.modal-zoom-leave-active {
  transition: all .75s ease;
}

.modal-zoom-enter-from,
.modal-zoom-leave-to {
  transform: scale(0.2);
  opacity: 0;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>