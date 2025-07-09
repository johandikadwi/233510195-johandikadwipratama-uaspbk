import { mount } from '@vue/test-utils'
import FavoriteButton from '../src/components/Navbar.vue'

describe('FavoriteButton.vue', () => {
  it('emit toggle event on click', () => {
    const wrapper = mount(FavoriteButton)
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('toggle')
  })
})