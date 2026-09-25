<script setup lang="ts">
import IconToggle from '@/assests/icons/IconToggle.vue'
import Menu from './Menu.vue'
import { ref } from 'vue'

const isOpenMenu = ref(false)
</script>

<template>
  <header>
    <p>● Bridge Collective</p>
    <IconToggle class="icon" @click="isOpenMenu = !isOpenMenu" />
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
