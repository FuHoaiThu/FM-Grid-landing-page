import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import Header from '@/components/header/Header.vue'
import Menu from '@/components/header/Menu.vue'

describe('Header', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Header)
  })
  it('should render the brand', () => {
    const brand = wrapper.find('[data-test="brand"]')

    expect(brand.exists()).toBe(true)
    expect(brand.text()).toBe('● Bridge Collective')
  })

  it('should not render the menu initially', () => {
    const menuComponent = wrapper.find('[data-test="menu"]')

    expect(menuComponent.exists()).toBe(false)
  })

  it('should open the menu when clicking the menu button', async () => {
    const toggleIcon = wrapper.find('[data-test="toggle"]')
    await toggleIcon.trigger('click')

    let menuComponent = wrapper.find('[data-test="menu"]')
    expect(menuComponent.exists()).toBe(true)

    await toggleIcon.trigger('click')

    menuComponent = wrapper.find('[data-test="menu"]')
    expect(menuComponent.exists()).toBe(false)
  })
})
