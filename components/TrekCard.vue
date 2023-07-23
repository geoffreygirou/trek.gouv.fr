<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string;
    subtitle: string;
    description: string;
    link: string;
    imagePath: string;
  }>(),
  {
    title: "Trek",
    subtitle: "Best trek ever",
    description: "2 KM",
    link: "2 DAYS",
    imagePath: "/assets/img/treks/trek.png",
  },
);

const descriptionSm: string = computed(() => {
  return props.description.length > 100
    ? props.description.substring(0, 100) + "..."
    : props.description;
});
</script>
<template>
  <div class="fr-col-12 fr-col-md-3 fr-mb-2w">
    <div class="fr-card fr-card--grey fr-enlarge-link">
      <div class="fr-card__body">
        <h3 class="fr-card__title">
          <a class="fr-card__link" :href="link">{{ title }}</a>
        </h3>
        <p class="fr-card__detail">
          {{ subtitle }}
        </p>
        <p class="fr-card__desc">
          {{ descriptionSm }}
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
