<template>
    <div class="divider" :class="dividerBackground">
      <div class="divider-line"></div>
      <div class="divider-title">{{ title }}</div>
      <div class="divider-line"></div>
    </div>
</template>

<script>

export default {
    props: {
        title: String,
        dividerBackground: String,
    }
}

</script>

<style scoped>
.divider {
  display: flex;
  align-items: center;
  gap: 2vw;
  /* padding: 120px 0; */
  height: var(--divider-height);
}

.divider-line {
  flex: 1;
  height: 1px;
  background: #000000;
  opacity: .5;
}

.divider-title {
    text-transform: uppercase;
    font-weight: 900;
    font-size: clamp(28px, 3vw, 56px);
    letter-spacing: -3%;
    text-align: center;
    text-transform: uppercase;
    padding: 0 1.5vw;
}
</style>