<script setup lang="ts">
import { useTreksStore } from '@/stores/trekStore'

const store = useTreksStore()
</script>
<template>
  <section id="hero-trek" class="fr-col-md-12 text-center">
    <h1>Les plus beaux treks de France</h1>
    <p>
      Découvrez les parcours de Trek sur le territoire. Explorez les joyaux de
      vos régions.
    </p>

    <DsfrButton @click="$router.push('/treks')">
      <span class="trek-count"> Voir les Treks ({{ store.countTreks }})</span>
    </DsfrButton>
    <DsfrPicture
      size="small"
      alt="Des panoramas à couper le souffle"
      src="/assets/img/trek-viewpoint.png"
      ratio="16x9"
    />
  </section>
</template>
