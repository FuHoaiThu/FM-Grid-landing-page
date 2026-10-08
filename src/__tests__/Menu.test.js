import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import Menu from '@/components/header/Menu.vue'

describe('Menu', () => {
  it('should render all navigation items', async () => {
    const wrapper = mount(Menu, {
      props: {
        isOpen: true,
      },
    })
    const items = wrapper.findAll('li')
    expect(items).toHaveLength(5)
    expect(items[0].text()).toBe('About')
    expect(items[1].text()).toBe('OurWork')
    expect(items[2].text()).toBe('Partners')
    expect(items[3].text()).toBe('Annual Report')
    expect(items[4].text()).toBe('Donate')
  })
})
