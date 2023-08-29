<template>
  <div class="main-container">
    <Header />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
</script>

<style scoped>
main {

  flex-grow: 1;
  padding: 50px;
}

.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>