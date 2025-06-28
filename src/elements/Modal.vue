<template>
  <transition name="modal-zoom">
    <div class="modal" v-if="visible" @click.self="$emit('close')">
      <div class="modal-content">
        <button class="modal-close" @click="$emit('close')" aria-label="Close modal">×</button>
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
    /* padding: 2rem; */
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
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  color: #333;
  transition: color 0.2s ease;
}

.modal-close:hover {
  color: #000;
}

/* Modal zoom animation */
.modal-zoom-enter-active,
.modal-zoom-leave-active {
  transition: transform .75s ease, opacity .75s ease;
}

.modal-zoom-enter-from,
.modal-zoom-leave-to {
  transform: scale(0.2);
  opacity: 0;
}
</style>