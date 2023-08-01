import { mount, VueWrapper } from '@vue/test-utils'
import TrekCard from '@/components/TrekCard.vue'

describe('TrekCard.vue', () => {
  let wrapper: VueWrapper<any>

  beforeEach(() => {
    wrapper = mount(TrekCard, {
      props: {
        title: 'Trek 1',
        subtitle: 'Subtitle 1',
        description: 'This is a long description that should be cut short.',
        link: '/trek1',
        imagePath: '/path/to/image.jpg',
      },
    })
  })

  it('renders props correctly', () => {
    expect(wrapper.find('.fr-card__link').text()).toBe('Trek 1')
    expect(wrapper.find('.fr-card__detail').text()).toBe('Subtitle 1')
    expect(wrapper.find('.fr-card__desc').text()).toContain(
      'This is a long description',
    )
    expect(wrapper.find('.fr-card__img img').attributes('src')).toBe(
      '/path/to/image.jpg',
    )
  })

  it('computes small description correctly', () => {
    expect(wrapper.find('.fr-card__desc').text().length).toBeLessThan(101)
  })

  // test('triggers a click', async () => {
  //   await wrapper.trigger('click')
  //   expect(mockRouter.push).toHaveBeenCalledTimes(1)
  //   expect(mockRouter.push).toHaveBeenCalledWith('/treks/1')
  // })
})
