<template>
    <div class="spacer" :class="dividerBackground"></div>
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
.spacer {
  display: flex;
  height: 120px;
}
</style>