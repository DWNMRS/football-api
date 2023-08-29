<template>
  <div class="container">
    <select class="select" v-model="search">
      <option>Не выбранно</option>
      <option v-for="area of areas">{{ area }}</option>
    </select>
    <div v-if="pending" class="">Loading...</div>
    <div v-else class="competition-wrapper">
      <div class="competition" v-for="competition of competitions">
        <NuxtLink class="competition-link" :to="`/competitions/${competition.code}`">
          <img class="competition-img" :width="100" :height="100" :src="competition.emblem" alt="">
          <span class="competition-name">{{ competition.name }}</span>
        </NuxtLink>
      </div>
    </div>

  </div>
</template>

<script setup>
const { appMode } = useNuxtApp().$config.public
const search = ref('')
const { pending, data: competitionData } = await useFetch('v4/competitions', {
  headers: {
    'X-Auth-Token': '0374bb48d0564f97af8f430c265983d9'
  },
  baseURL: appMode === 'production' ? 'https://api.football-data.org/' : '',
  lazy: true,
  server: false,
  
})

const areas = computed(() => {
  if (!competitionData.value) {
    return []
  }
  return [...new Set(competitionData.value.competitions.map(item => {
    return item.area.name
  }))]
})

const competitions = computed(()=> {
  if (!search.value || search.value === 'Не выбранно') {
    return competitionData.value.competitions
  }
  return competitionData.value.competitions.filter(item => item.area.name === search.value)
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

.competition-wrapper {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.competition {
  width: calc(100% / 6);
  min-width: 200px;
  box-shadow: 0px 0px 0px 2px lightgray;
  transition: 0.3s;
}

.competition:hover {
  box-shadow: 0px 0px 5px 2px grey;
}

.competition-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

}

.competition-img {
  margin-bottom: 20px;
}
</style>