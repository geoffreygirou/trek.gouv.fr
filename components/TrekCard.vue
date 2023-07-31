<script setup lang="ts">
import { descriptionSm } from '@/utils/string'
const props = defineProps<{
  title: string
  subtitle: string
  description: string
  link: string
  imagePath: string
}>()

const description = descriptionSm(props.description)
</script>
<template>
  <div class="fr-col-12 fr-col-md-3 fr-mb-2w">
    <div class="fr-card fr-card--grey fr-enlarge-link">
      <div class="fr-card__body">
        <h3 class="fr-card__title">
          <RouterLink :to="link" class="fr-card__link">{{ title }}</RouterLink>
        </h3>
        <p class="fr-card__detail">
          {{ subtitle }}
        </p>
        <p class="fr-card__desc">
          {{ description }}
        </p>
      </div>
      <div class="fr-card__img">
        <img
          class="fr-responsive-img lozad"
          :src="imagePath"
          :data-src="imagePath"
          alt=""
          data-fr-js-ratio="true"
          data-loaded="true"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
