import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

const TestIcon = {
  template: '<svg data-test="test-icon"></svg>',
}

describe('Card', () => {
  it('should render statistic information correctly', () => {
    const wrapper = mount(Card, {
      props: {
        card: {
          id: 0,
          icon: TestIcon,
          value: '24M',
          title: 'Students reached',
          description: 'Across 31 countries since 2011.',
        },
      },
    })
    const cardTitle = wrapper.find('[data-test="card-header-title"]')

    expect(cardTitle.text()).toBe('Students reached')
  })
})
