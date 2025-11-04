<template>
  <div>
    <nav style="position:fixed; top:0; width:100%; z-index: 9999;" :class="{ 'menu-open': isMenuOpen }">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div class="logo-wrapper" :class="{ 'hidden': isMenuOpen }">
          <router-link to="/"><img src="/logo.svg" alt=""></router-link>
        </div>
        <BurgerMenu ref="burgerMenu" @toggle="handleMenuToggle" :class="{ 'text-white': isMenuOpen }" />
      </div>
    </nav>

    <!-- Menu Overlay -->
    <MenuOverlay :isOpen="isMenuOpen" @close="closeMenu" />

    <main>
      <router-view v-slot="{ Component, route }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import BurgerMenu from './elements/BurgerMenu/BurgerMenu.vue'
import MenuOverlay from './elements/MenuOverlay/MenuOverlay.vue'
import Footer from './elements/Footer/Footer.vue';

export default {
  name: 'App',
  components: {
    BurgerMenu,
    MenuOverlay,
    Footer
  },
  data() {
    return {
      isMenuOpen: false
    };
  },
  watch: {
    isMenuOpen(newVal) {
      if (newVal) {
        document.body.classList.add('menu-open');
      } else {
        document.body.classList.remove('menu-open');
      }
    }
  },
  provide() {
    return {
      isMenuOpen: this.isMenuOpen
    };
  },
  methods: {
    handleMenuToggle(isOpen) {
      this.isMenuOpen = isOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
      this.$refs.burgerMenu.closeMenu();
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
  transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  width: 100%;
  right: auto;
}

nav.menu-open {
  color: #F6F6F6;
  width: unset;
  right: 0;
}

.logo-wrapper {
  transition: opacity 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), 
              display 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  opacity: 1;
}

.logo-wrapper.hidden {
  opacity: 0;
  display: none;
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

:global(body.menu-open) {
  overflow: hidden;
}
</style>