<script setup lang="ts">
import { useTreksStore } from '@/stores/trekStore'
const store = useTreksStore()
store.fetchTreks()
</script>
<template>
  <div class="fr-grid-row fr-grid-row--gutters startups">
    <TrekCard
      v-for="(trek, index) in store.trekList"
      :key="index"
      :item="trek"
      :title="trek.name"
      :subtitle="
        trek.duration + ' / ' + trek.length + ' / ' + trek.maxElevation
      "
      :description="trek.description"
      :link="'/treks/' + trek.id"
      :image-path="trek.imagePath"
    />
  </div>
</template>

<style scoped></style>
