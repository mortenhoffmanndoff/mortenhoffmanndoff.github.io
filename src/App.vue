
<template>
  <div class="path"><strong>Current route path:</strong> {{ $route.fullPath }}</div>
  <section>
    <aside>
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/about">Go to About</RouterLink>
    </aside>
    <main>
      <RouterView />
    </main>
  </section>
</template>

<script></script>
<style></style>

