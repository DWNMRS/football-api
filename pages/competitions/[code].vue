<template>
  <div v-if="pending">Loading...</div>
  <div v-else class="competition-page">
    <div class="competition-img">
      <img :src="competition.emblem" alt="">
    </div>
    <span>{{ competition.name }}</span>
    <span>Текущий сезон</span>
    <span>Начало: {{ competition.currentSeason.startDate }}</span>
    <span>Конец: {{ competition.currentSeason.endDate }}</span>
    <span>Победитель: {{ competition.currentSeason.winner === null ? 'Не определен' : competition.currentSeason.winner
    }}</span>
  </div>
</template>

<script setup >
const { code } = useRoute().params
const { appMode } = useNuxtApp().$config.public
const { pending, data: competition } = await useFetch('/v4/competitions/' + code, {
  key: code,
  headers: {
    'X-Auth-Token': '0374bb48d0564f97af8f430c265983d9'
  },
  baseURL: appMode === 'production' ? 'https://api.football-data.org/' : '',
  lazy: true,
  server: false,
})

definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
.competition-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.competition-img {
  max-width: 500px;
  margin-bottom: 50px;
}
</style>