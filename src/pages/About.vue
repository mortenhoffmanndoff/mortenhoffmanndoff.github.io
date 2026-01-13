<template>
  <div class="about-page">
    <Work /> 
    <h1>About Us</h1>
    <p>This is the about page content.</p>
    <p>Learn more about our application here.</p>
    <a href="/" @click.prevent="navigateTo('/')">Go back to Home</a>
    <br>
    <br>
    <br>
    <br>

  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  inject: ['navigateWithTransition'],
  components: {
  },
  methods: {
    navigateTo(route) {
      if (this.navigateWithTransition) {
        this.navigateWithTransition(route);
      } else {
        this.$router.push(route);
      }
    }
  }
}
</script>

<style scoped>
.about-page {
  padding: 60px;
  min-height: 100vh;
}

.about-page h1 {
  font-size: clamp(40px, 8vw, 80px);
  margin-bottom: 20px;
}

.about-page p {
  margin: 20px 0;
  font-size: 18px;
}

.about-page a {
  display: inline-block;
  margin-top: 20px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
</style>