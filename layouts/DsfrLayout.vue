<script setup lang="ts">
const navItems = [
  {
    to: { name: 'index' },
    text: 'Accueil',
  },
  {
    to: { name: "Treks" },
    text: "Treks",
  },
]
</script>

<template>
  <div>
    <DsfrHeader :service-title="`trek.gouv.fr`" />
    <div class="fr-container">
      <DsfrNavigation :nav-items="navItems" />
      <slot />
    </div>
    <DsfrFooter />
  </div>
</template>

<style scoped></style>
