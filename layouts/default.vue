<script setup lang="ts">
const navItems = [
  {
    to: { name: 'index' },
    text: 'Accueil',
  },
  {
    to: { name: 'Treks' },
    text: 'Treks',
  },
]
</script>

<template>
  <div>
    <DsfrHeader :service-title="`trek.gouv.fr`" />
    <div class="fr-container">
      <DsfrNavigation class="fr-mb-2w" :nav-items="navItems" />
      <slot />
    </div>
    <DsfrFooter />
  </div>
</template>

<style scoped>
.fr-container {
  min-height: 100vh;
}
</style>
