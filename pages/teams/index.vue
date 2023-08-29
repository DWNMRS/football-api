<template>
  <div class="container">
    <div v-if="pending" class="">Loading...</div>
    <div  v-else class="team-wrapper">
      <div class="team" v-for="team of teams.teams">
        <NuxtLink class="team-link" :to="`/teams/${team.id}`">
          <img class="team-img" :width="100" :height="100" :src="team.crest" alt="">
          <span class="team-name">{{ team.name }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { appMode } = useNuxtApp().$config.public
const { pending, data: teams } = await useFetch('v4/teams', {
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.select {
  width: 100%;
  max-width: 500px;
  margin-bottom: 50px;
}

.team-wrapper {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.team {
  width: calc(100% / 6);
  min-width: 200px;
  box-shadow: 0px 0px 0px 2px lightgray;
  transition: 0.3s;
}

.team:hover {
  box-shadow: 0px 0px 5px 2px grey;
}

.team-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

}

.team-img {
  margin-bottom: 20px;
}
</style>