<template>
    <header>
    <!-- Ingen direkte relevans for klient eller talrækken -->
    <div class="logo">
      <span>Christina</span>
      <span>Bjørn</span>
    </div>
    <svg class="menu-animation" width="112" height="107" viewBox="0 0 112 107" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="52" cy="52" r="51.5" transform="matrix(-1 0 0 1 108 2)" stroke="#22223A" />
      <path
        d="M56 1C25.5808 1 1 24.5476 1 53.5C1 82.4524 25.5808 106 56 106C86.4192 106 111 82.4524 111 53.5C111 24.5476 86.4192 1 56 1Z"
        stroke="#22223A" stroke-width="2" />
    </svg>
    <img src="./assets/i-am.png" alt="">
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 36px 56px;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  flex-direction: column;
  font-size: 32px;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--color-dark-blue);
}

</style>
