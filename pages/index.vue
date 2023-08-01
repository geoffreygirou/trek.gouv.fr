<script setup lang="ts">
import { useTreksStore } from '@/stores/trekStore'

const store = useTreksStore()
store.fetchTreks()
</script>
<template>
  <HeroTrekSection :count-treks="store.countTreks" />
</template>
