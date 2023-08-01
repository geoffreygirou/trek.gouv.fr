<script setup lang="ts">
import { useErrorStore } from '@/stores/errorStore'
definePageMeta({
  layout: false,
})

const store = useErrorStore()
const router = useRouter()

if (!store.hasError) {
  router.push('/')
}
</script>
<template>
  <div class="fr-container flex">
    <div class="half mx-10 my-10">
      <h1 class="font-25">
        {{ store.title }}
      </h1>
      <span class="block mt-15 mb-15">{{ store.subtitle }}</span>
      <p class="font-125">
        {{ store.description }}
      </p>
      <p>{{ store.help }}</p>
      <ul class="fr-btns-group fr-btns-group--inline" data-testid="fr-btns">
        <li>
          <button
            class="fr-btn fr-btn--md inline-flex"
            aria-disabled="false"
            link="/"
          >
            <router-link to="/">
              <span>Page d'accueil </span>
            </router-link>
          </button>
        </li>
        <li>
          <button
            class="fr-btn fr-btn--secondary fr-btn--md inline-flex"
            aria-disabled="false"
          >
            <router-link to="/">
              <span>Contactez-nous </span>
            </router-link>
          </button>
        </li>
      </ul>
    </div>
    <div class="half self-center text-center">
      <img
        class="error-img"
        src="https://vue-dsfr.netlify.app/assets/technical-error-372dc3b9.png"
      />
    </div>
  </div>
</template>
