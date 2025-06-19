<template>
    <section class="full-background" :style="backgroundImage"></section>
</template>

<script>
    export default {
        name: "FullBackground",

        props: {
            image: {
                type: String,
                required: true
            }
        },

        computed: {
            backgroundImage() {
                return {
                    backgroundImage: `url(${this.image})`
                };
            }
        }
    };

</script>

<style scoped>
.full-background {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  /* Responsive aspect ratio and fallback height */
  aspect-ratio: 15 / 9;
  width: 100%;
  min-height: 500px; /* fallback if aspect ratio fails on some browsers */

  /* Optional: ensure it takes up full viewport */
  display: block;
}
</style>