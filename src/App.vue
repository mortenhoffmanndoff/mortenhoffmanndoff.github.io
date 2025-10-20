<template>
  <div>
    <nav style="position:fixed; top:0; width:100%; z-index: 1000;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <router-link to="/"><img src="/logo.svg" alt=""></router-link>
          <!-- <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/work">Work</router-link> -->
        </div>
        <BurgerMenu @toggle="handleMenuToggle" />
      </div>
    </nav>
    <main>
      <router-view v-slot="{ Component, route }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
import BurgerMenu from './elements/BurgerMenu/BurgerMenu.vue'

export default {
  name: 'App',
  components: {
    BurgerMenu
  },
  methods: {
    handleMenuToggle(isOpen) {
      console.log('Menu is', isOpen ? 'open' : 'closed');
      // You can add logic here to show/hide a mobile menu
    }
  }
}
</script>

<style>

/* Page transition animations */
.page-enter-active,
.page-leave-active {
  transition: all 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.page-enter-from {
  opacity: 0;
  /* transform: translateY(50px); */
}

.page-leave-to {
  opacity: 0;
  /* transform: translateY(-50px); */
}

.page-enter-to,
.page-leave-from {
  opacity: 1;
  /* transform: translateY(0); */
}

/* Navigation styling */
nav {
  padding: 40px;
  /* background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px); */
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  font-weight: bold;
  color: #333;
  transition: color 0.3s ease;
}

nav a:hover,
nav a.router-link-active {
  color: #007acc;
}

main {
  min-height: 100vh;
}
</style>