<script setup lang="ts">
import { useTreksStore } from "~/stores/treks";

const store = useTreksStore();
</script>
<template>
  <section id="hero-trek" class="flex flex-col items-center">
    <h1
      ref="headingRef"
      class="inline-flex flex-col items-center mt-12 text-center"
    >
      Les plus beaux treks de France
    </h1>
    <h2 class="inline-flex flex-col items-center text-center w-full -z-1">
      <HeroTrekNameRotator />
    </h2>
    <p class="max-w-2xl mt-12 mb-12 text-center text-grey-700">
      Découvrez les parcours de Trek sur le territoire. Explorez les joyaux de
      vos régions.
    </p>

    <DsfrButton
      :label="`Voir les Treks (${store.trekList.length})`"
      @click="$router.push('/treks')"
    />
    <DsfrPicture
      size="small"
      alt="Des panoramas à couper le souffle"
      src="/assets/img/trek-viewpoint.png"
      ratio="16x9"
    />
  </section>
</template>
