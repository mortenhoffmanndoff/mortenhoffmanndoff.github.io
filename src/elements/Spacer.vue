<template>
    <div class="spacer" :class="spacerBackground"></div>
</template>

<script>

export default {
    props: {
        title: String,
        spacerBackground: String,
    }
}

</script>

<style scoped>
.spacer {
  display: flex;
  height: 120px;
}
</style>