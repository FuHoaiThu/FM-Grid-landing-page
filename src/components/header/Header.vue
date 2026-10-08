<script setup lang="ts">
import IconOpen from '@/assests/icons/IconOpen.vue'
import Menu from './Menu.vue'
import { ref } from 'vue'
import IconClose from '@/assests/icons/IconClose.vue'

const isOpenMenu = ref(false)
</script>

<template>
  <header>
    <p data-test="brand">● Bridge Collective</p>
    <component
      :is="isOpenMenu ? IconClose : IconOpen"
      class="icon"
      data-test="toggle"
      @click="isOpenMenu = !isOpenMenu"
    />
  </header>
  <Menu :isOpen="isOpenMenu" />
</template>

<style lang="scss" scoped>
@use '@/assests/scss/variables.scss' as *;

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 48px;
  border-bottom: 1px solid $color-blue-400;
  p {
    font-size: 14px;
  }
  .icon {
    cursor: pointer;
  }
}
</style>
