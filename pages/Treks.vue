<script setup lang="ts">
import { useTreksStore } from '~/stores/treks'

const store = useTreksStore()
</script>
<template>
  <DsfrLayout>
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
        :link="trek.link"
        :image-path="trek.imagePath"
      />
    </div>
  </DsfrLayout>
</template>

<style scoped></style>
