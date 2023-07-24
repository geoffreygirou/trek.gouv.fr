import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import HeroTrekSection from '@/components/landing/HeroTrekSection.vue'
import { useTreksStore } from '@/stores/treks'

describe('HeroTrekSection.vue', () => {
  let wrapper: any
  // Create a new Pinia instance
  const pinia = createPinia()

  // Use the store with the new Pinia instance
  const treksStore = useTreksStore(pinia)

  // Set the state of the store
  treksStore.$state.trekList = [
    {
      slug: 'slugs-are-cool',
      name: 'Cool trek',
      description: 'This is a trek description',
      length: '80 à 116 km',
      duration: '4 jours',
      difficulty: 'modérée',
      maxElevation: '2 980 m',
      link: 'https://www.visorando.com/randonnee-le-tour-des-cerces/',
      imagePath: '/assets/img/treks/le-tour-des-cerces.png',
      active: true,
    },
  ]

  wrapper = mount(HeroTrekSection, {
    global: {
      plugins: [pinia],
      stubs: {
        HeroTrekNameRotator: true, // Stub the HeroTrekNameRotator component
      },
    },
  })

  mount(HeroTrekSection, {
    global: {
      mocks: {
        $router: {
          push: jest.fn(),
        },
      },
    },
  })

  it('renders heading text correctly', () => {
    expect(wrapper.find('#hero-trek h1').text()).toBe(
      'Les plus beaux treks de France',
    )
  })
})
