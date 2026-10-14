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
    <button
      type="button"
      class="menu-toggle"
      data-test="toggle"
      :aria-expanded="isOpenMenu"
      aria-controls="mobile-navigation"
      :aria-label="isOpenMenu ? 'Close menu' : 'Open menu'"
      @click="isOpenMenu = !isOpenMenu"
    >
      <component :is="isOpenMenu ? IconClose : IconOpen" aria-hidden="true" />
    </button>
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
}
.menu-toggle {
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;
}
</style>
