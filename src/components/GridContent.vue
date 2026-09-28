<template>
  <section class="wrapper">
    <div class="col hero">
      <h1>A classroom for every child.</h1>
      <p>
        We fund the schools, train the teachers, and measure what works — so every child we reach
        today becomes a graduate tomorrow.
      </p>
    </div>
    <Card class="col" v-for="card in cards" :key="card.id" :card="card" />
  </section>
</template>
<script setup>
import IconStar from '@/assests/icons/IconStar.vue'
import Card from './Card.vue'
import IconPlus from '@/assests/icons/IconPlus.vue'
import IconArrow from '@/assests/icons/IconArrow.vue'
import IconVector from '@/assests/icons/IconVector.vue'

const cards = [
  {
    id: 0,
    icon: IconStar,
    value: '24M',
    title: 'Students reached',
    description: 'Across 31 countries since 2011.',
  },
  {
    id: 1,
    icon: IconPlus,
    value: '1,284',
    title: 'Schools partnered',
    description: 'Schools partnered',
  },
  {
    id: 2,
    icon: IconArrow,
    value: '38K',
    title: 'Teachers trained',
    description: 'Equipped with modern tools and methodology.',
  },
  {
    id: 3,
    icon: IconVector,
    value: '3.1×',
    title: 'Graduation lift',
    description: 'Partner schools outperform national averages 3x.',
  },
]
</script>
<style lang="scss" scoped>
@use '../assests/scss/variables.scss' as *;

.wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  .col {
    border: 1px solid $color-blue-400;
  }
  .hero {
    padding: 48px;
    grid-row: span 2;
    h1 {
      font-size: 60px;
      padding-bottom: 40px;
    }
    p {
      font-size: 17px;
      font-weight: 400px;
      line-height: 165%;
      color: $color-blue-200;
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    .hero {
      grid-column: span 2;
      min-height: 536px;
    }
  }
}
</style>
