<template>
    <header>
    <!-- Ingen direkte relevans for klient eller talrækken -->
    <div class="logo">
      <img src="/logo.svg" alt="" />
    </div>
    
    <div role="button">
      <svg class="menu-animation" width="112" height="107" viewBox="0 0 112 107" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="52" cy="52" r="51.5" transform="matrix(-1 0 0 1 108 2)" stroke="#22223A" />
        <path
          d="M56 1C25.5808 1 1 24.5476 1 53.5C1 82.4524 25.5808 106 56 106C86.4192 106 111 82.4524 111 53.5C111 24.5476 86.4192 1 56 1Z"
          stroke="#22223A" stroke-width="2" />
      </svg>

      <svg class="menu-lines" width="28" height="14" viewBox="0 0 28 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="28" y1="13" x2="8" y2="13" stroke="#22223A" stroke-width="2"/>
        <line y1="-1" x2="17" y2="-1" transform="matrix(-1 0 0 1 28 8)" stroke="#22223A" stroke-width="2"/>
        <line x1="28" y1="1" x2="-8.74228e-08" y2="0.999998" stroke="#22223A" stroke-width="2"/>
      </svg>
    </div>

  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 36px 54px;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-lines {
  position: fixed;
  top: 84px;
  right: 96px;
}

.menu-animation {
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>
