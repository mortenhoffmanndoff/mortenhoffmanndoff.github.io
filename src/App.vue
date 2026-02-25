<template>
  <div>
    <nav class="app-nav" :class="{ 'menu-open': isMenuOpen }">
      <div class="nav-content">
        <div class="logo-wrapper" :class="{ 'hidden': isMenuOpen }">
          <a href="/" @click.prevent="navigateWithTransition('/')"><img src="/logo-mic.svg" alt=""></a>
        </div>
        <BurgerMenu ref="burgerMenu" @toggle="handleMenuToggle" :class="{ 'text-white': isMenuOpen }" />
      </div>
    </nav>

    <!-- Menu Overlay -->
    <MenuOverlay :isOpen="isMenuOpen" @close="closeMenu" @navigate="handleMenuNavigation" />

    <!-- Page Transition Overlay -->
    <PageTransition ref="pageTransition" @midpoint="onTransitionMidpoint" />

    <main>
      <router-view v-slot="{ Component, route }">
        <component :is="Component" :key="route.fullPath" />
      </router-view>
    </main>
    <Footer id="contact" />
  </div>
</template>

<script>
import BurgerMenu from './elements/BurgerMenu/BurgerMenu.vue'
import MenuOverlay from './elements/MenuOverlay/MenuOverlay.vue'
import Footer from './elements/Footer/Footer.vue';
import PageTransition from './elements/PageTransition/PageTransition.vue';

export default {
  name: 'App',
  components: {
    BurgerMenu,
    MenuOverlay,
    Footer,
    PageTransition
  },
  data() {
    return {
      isMenuOpen: false,
      pendingRoute: null
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
      isMenuOpen: this.isMenuOpen,
      navigateWithTransition: this.navigateWithTransition
    };
  },
  methods: {
    handleMenuToggle(isOpen) {
      this.isMenuOpen = isOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
      this.$refs.burgerMenu.closeMenu();
    },
    
    // Handle navigation with curve transition
    async navigateWithTransition(to) {
      if (this.$route.fullPath === to) return;
      if (this.$refs.pageTransition.isAnimating) return; // Prevent double animation
      
      this.pendingRoute = to;
      await this.$refs.pageTransition.animate();
    },
    
    // Called at the midpoint of the transition (full coverage)
    onTransitionMidpoint() {
      if (this.pendingRoute) {
        // Scroll to top instantly (hidden by overlay)
        window.scrollTo(0, 0);
        this.$router.push(this.pendingRoute);
        this.pendingRoute = null;
      }
    },
    
    // Handle navigation from menu
    handleMenuNavigation(route) {
      this.closeMenu();
      this.navigateWithTransition(route);
    }
  }
}
</script>

<style>

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

.app-nav {
  position: fixed;
  top: 0;
  z-index: 9999;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

/* Responsive Nav */
@media (max-width: 1023px) {
  nav {
    padding: 16px 20px;
  }

  .logo-wrapper a img {
    height: 42px;
  }
}

@media (max-width: 480px) {
  nav {
    padding: 12px 16px;
  }
}
</style>