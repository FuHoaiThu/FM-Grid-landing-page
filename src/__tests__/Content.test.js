import { describe, expect, it } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'

import Content from '@/components/GridContent.vue'
import Card from '@/components/Card.vue'
import IconStar from '@/assests/icons/IconStar.vue'
import IconPlus from '@/assests/icons/IconPlus.vue'
import IconArrow from '@/assests/icons/IconArrow.vue'
import IconVector from '@/assests/icons/IconVector.vue'

describe('Content', () => {
  it('should render the hero heading', () => {
    const wrapper = mount(Content)
    const heroHeading = wrapper.find('[data-test="hero-heading"]')

    expect(heroHeading.text()).toBe('A classroom for every child.')
  })

  it('should render the hero description', () => {
    const wrapper = mount(Content)
    const heroDescription = wrapper.find('[data-test="hero-description"]')

    expect(heroDescription.text()).toBe(
      'We fund the schools, train the teachers, and measure what works — so every child we reach today becomes a graduate tomorrow.',
    )
  })

  it('should render all statistic cards', () => {
    const wrapper = shallowMount(Content)
    const cards = wrapper.findAllComponents(Card)
    expect(cards).toHaveLength(4)
  })

  it('should pass the correct props to each card', () => {
    const wrapper = shallowMount(Content)
    const cards = wrapper.findAllComponents(Card)
    expect(cards[0].props('card')).toEqual({
      id: 0,
      icon: IconStar,
      value: '24M',
      title: 'Students reached',
      description: 'Across 31 countries since 2011.',
    })
    expect(cards[1].props('card')).toEqual({
      id: 1,
      icon: IconPlus,
      value: '1,284',
      title: 'Schools partnered',
      description: 'Schools partnered',
    })
    expect(cards[2].props('card')).toEqual({
      id: 2,
      icon: IconArrow,
      value: '38K',
      title: 'Teachers trained',
      description: 'Equipped with modern tools and methodology.',
    })
    expect(cards[3].props('card')).toEqual({
      id: 3,
      icon: IconVector,
      value: '3.1×',
      title: 'Graduation lift',
      description: 'Partner schools outperform national averages 3x.',
    })
  })
})
