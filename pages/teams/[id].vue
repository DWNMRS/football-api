<template>
  <div v-if="pending">Loading...</div>
  <div v-else class="team-page">
    <div class="team-img">
      <img :src="team.crest">
    </div>
    <span>{{ team.name }}</span>
    <span>Основан в: {{ team.founded }}</span>
    <span>Команда</span>
    <div class="team-page__squad">
      <span v-for="crewman of team.squad">
        {{ crewman.position }} - {{ crewman.name }}
      </span>
    </div>
  </div>
</template>

<script setup >
const { id } = useRoute().params
const { appMode } = useNuxtApp().$config.public
const { pending, data: team } = await useFetch('/v4/teams/' + id, {
  key: id,
  headers: {
    'X-Auth-Token': '0374bb48d0564f97af8f430c265983d9'
  },
  baseURL: appMode === 'production' ? 'https://api.football-data.org/' : '',
  lazy: true,
  server: false
})

definePageMeta({
  layout: 'default'
})

</script>

<style scoped>
.team-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.team-page__squad {
  display: flex;
  flex-direction: column;
  align-items: start;
}
</style>