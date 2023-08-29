<template>
  <header>
    <nav>
      <NuxtLink to="/competitions">Competitions</NuxtLink>
      <NuxtLink to="/teams">Teams</NuxtLink>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
header {
  background-color: #333;
  color: white;
  padding: 1rem;
}

nav {
  display: flex;
  justify-content: space-around;
}
</style>