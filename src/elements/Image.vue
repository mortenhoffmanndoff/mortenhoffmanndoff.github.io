<template>
    <img :src="src" :alt="alt" class="img-responsive" />
</template>

<script>
export default {
    name: 'Image',
    props: {
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            default: ''
        }
    }
}
</script>

<style>
img {
    display: block;
}

.img-responsive {
  width: 100%;
  height: auto;
}
</style>