<script setup lang="ts">
const { pending = true, data: counter } = useLazyFetch('/api/counter', {
  pick: ['count'],
})
</script>

<template>
  <div v-if="pending">Loading ...</div>
  <div v-else>
    <div>Page visits: {{ counter.count }}</div>
  </div>
</template>
