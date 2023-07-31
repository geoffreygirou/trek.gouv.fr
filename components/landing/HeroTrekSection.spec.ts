import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import HeroTrekSection from '@/components/landing/HeroTrekSection.vue'
import { useTreksStore } from '@/stores/trekStore'

describe('HeroTrekSection.vue', () => {
  let wrapper: any
  // Create a new Pinia instance
  const pinia = createPinia()

  // Use the store with the new Pinia instance
  const treksStore = useTreksStore(pinia)

  // Set the state of the store
  treksStore.$state.trekList = [
    {
      id: 1,
      slug: 'slugs-are-cool',
      name: 'Cool trek',
      description: 'This is a trek description',
      length: '80 à 116 km',
      duration: '4 jours',
      difficulty: 'modérée',
      maxElevation: '2 980 m',
      link: 'https://www.visorando.com/randonnee-le-tour-des-cerces/',
      imagePath: '/assets/img/treks/le-tour-des-cerces.png',
    },
  ]

  wrapper = mount(HeroTrekSection, {
    global: {
      plugins: [pinia],
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

  it('display the correct number of treks', () => {
    const countElement = wrapper.find('.trek-count')
    expect(countElement.text()).toContain(
      treksStore.$state.trekList.length.toString(),
    )
  })
})
