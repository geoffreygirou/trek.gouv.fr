import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { Trek } from '@/types/treks'
import { getTreks, getTrek } from '@/composables/api/services/trekApiService'

// SETUP
export const useTreksStore = defineStore('treks', () => {
  const trekList = ref<Trek[]>([])
  const blankTrek: Trek = {
    id: 0,
    slug: '',
    name: '',
    description: '',
    length: '',
    duration: '',
    difficulty: '',
    maxElevation: '',
    link: '',
    imagePath: '',
  }
  const currentTrek = ref<Trek>(blankTrek)

  const countTreks = computed(() => trekList.value.length)

  async function fetchTreks() {
    await getTreks().then((apiTreks) => {
      trekList.value = apiTreks
    })
  }

  async function fetchTrek(id: number) {
    await getTrek(id).then((apiTrek) => {
      currentTrek.value = apiTrek
    })
  }

  function resetCurrentTrek() {
    currentTrek.value = blankTrek
  }

  return {
    trekList,
    currentTrek,
    countTreks,
    fetchTreks,
    fetchTrek,
    resetCurrentTrek,
  }
})

/* OPTION 
import { Trek, TreksState } from '@/types/treks'

export const useTreksStore = defineStore('treks', {
  state: (): TreksState => ({
    trekList: [],
    currentTrek: {
    id: 0,
    slug: '',
    name: '',
    description: '',
    length: '',
    duration: '',
    difficulty: '',
    maxElevation: '',
    link: '',
    imagePath: '',
  },
  }),
  getters: {
    countTreks: (state) => state.trekList.length,
  },
  actions: {
    async fetchTreks() {
      await getTreks().then((apiTreks) => {
        this.trekList = apiTreks
      })
    },
    async fetchTrek(id: number) {
      await getTrek(id).then((apiTrek) => {
        this.currentTrek = apiTrek
      })
    },
  },
})
*/
