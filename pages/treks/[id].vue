<template>
  <div>
    <h1>{{ store.currentTrek.name }}</h1>
    <div class="fr-grid-row">
      <div class="fr-col-md-6 fr-col-sm-12">
        <img
          class="fr-responsive-img"
          :src="store.currentTrek.imagePath"
          :alt="store.currentTrek.name"
        />
        <div class="trek-details fr-mt-10v">
          <p class="fr-tag fr-mx-2v">
            Durée : {{ store.currentTrek.duration }}
          </p>
          <p class="fr-tag fr-mx-2v">
            Longueur : {{ store.currentTrek.length }}
          </p>
          <p class="fr-tag fr-mx-2v">
            Élévation max : {{ store.currentTrek.maxElevation }}
          </p>
        </div>
      </div>
      <div class="fr-col-md-6 fr-col-sm-12 fr-px-10v">
        <h2>À voir sur ce Trek</h2>
        <p class="trek-description"></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTreksStore } from '@/stores/trekStore'

const route = useRoute()
const store = useTreksStore()
store.fetchTrek(parseInt(route.params.id as string)).then(() => {
  document.getElementsByClassName('trek-description')[0].innerHTML =
    store.currentTrek.description
})
onBeforeRouteLeave(() => {
  store.resetCurrentTrek()
})
</script>

<style scoped>
.trek-description {
  text-align: justify;
}
.trek-details {
  text-align: center;
}
</style>
