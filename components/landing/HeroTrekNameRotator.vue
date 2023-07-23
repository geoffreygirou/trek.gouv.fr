<template>
  <span class="block relative w-full h-18">
    <Transition
      appear
      :css="false"
      @enter="enterTransition"
      @leave="leaveTransition"
    >
      <div
        ref="trekRef"
        :key="activeTreks[0].slug"
        class="w-full absolute top-0 left-0 opacity-0"
        :class="`text-${activeTreks[0].slug}-base`"
      >
        <span>{{ activeTreks[0].name }}</span>

        <div
          class="absolute -z-[1] w-[2rem] h-[2rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div
            v-for="num in 20"
            :key="num"
            class="absolute w-[2rem] h-[2rem] top-0 left-0 bg-no-repeat bg-center bg-contain opacity-0"
            :class="[num % 2 && 'hidden md:block']"
          />
        </div>
      </div>
    </Transition>
  </span>
</template>

<script setup lang="ts">
import { animate, timeline } from 'motion'

const trekRef = ref()

const timeout = 5000
const rotationInterval = ref(null)
const treks = ref([
  {
    slug: 'cerces',
    name: 'Le Tour des Cerces',
    active: true,
  },
  {
    slug: 'vercors',
    name: 'La traversée du Vercors',
    active: false,
  },
  {
    slug: 'paradis-vanoise',
    name: 'Grand Paradis Vanoise',
    active: false,
  },
  {
    slug: 'massif-bauges',
    name: 'La traversée du Massif des Bauges',
    active: false,
  },
  {
    slug: 'haute-route',
    name: 'La Haute Route',
    active: false,
  },
])

const activeTreks = computed(() => {
  return treks.value.filter((b) => b.active)
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function enterTransition(el, done = () => {}) {
  timeline([
    [el, { opacity: 0, scale: 0.5, filter: 'blur(20px)' }, { duration: 0 }],
    [
      el,
      { opacity: 1, scale: 1, filter: 'blur(0px)' },
      { duration: 0.5, easing: 'ease-in-out' },
    ],
  ])
}

function leaveTransition(el, done) {
  animate(
    el,
    { opacity: 0, scale: 0.5, filter: 'blur(20px)' },
    { duration: 0.5, easing: 'ease-in-out' },
  )
  // TODO: complete event
  setTimeout(() => {
    done()
  }, 500)
}

function rotateTreks() {
  let currentEl = 0
  let el = treks.value[currentEl]

  rotationInterval.value = setInterval(() => {
    if (document.hidden) {
      return
    }
    el.active = false
    currentEl = (currentEl + 1) % treks.value.length

    el = treks.value[currentEl]
    el.active = true
  }, timeout)
}

onMounted(() => {
  rotateTreks()
  setTimeout(() => enterTransition(trekRef.value), 100)
})
</script>
