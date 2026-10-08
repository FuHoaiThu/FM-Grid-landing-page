import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import Footer from '@/components/Footer.vue'

describe('Footer', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Footer)
  })
  it('should render the copyright information', () => {
    const copyright = wrapper.find('[data-test="copyright"]')
    expect(copyright.exists()).toBe(true)
    expect(copyright.text()).toBe('© 2026 Bridge Collective')
  })

  it('should render the registered charity information', () => {
    const charity = wrapper.find('[data-test="charity"]')
    expect(charity.exists()).toBe(true)
    expect(charity.text()).toBe('Registered charity 12345678')
  })
})
