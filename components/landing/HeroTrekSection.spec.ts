import { mount } from '@vue/test-utils'
import HeroTrekSection from '@/components/landing/HeroTrekSection.vue'

describe('HeroTrekSection.vue', () => {
  let wrapper: any

  wrapper = mount(HeroTrekSection, {
    props: {
      countTreks: 1,
    },
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
    expect(countElement.text()).toContain('1')
  })
})
