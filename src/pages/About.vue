<template>
  <div class="about-page">
    <Work /> 
    <h1>About Us</h1>
    <p>This is the about page content.</p>
    <p>Learn more about our application here.</p>
    <router-link to="/">Go back to Home</router-link>
    <br>
    <br>
    <br>
    <br>

  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  components: {
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