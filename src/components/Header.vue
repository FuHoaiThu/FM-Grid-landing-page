<script setup lang="ts">
import IconToggle from '@/assests/icons/IconToggle.vue'
</script>

<template>
  <header>
    <p>● Bridge Collective</p>
    <IconToggle class="icon" />
  </header>
</template>

<style lang="scss" scoped>
@use '../assests/scss/variables.scss' as *;

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 48px;
  p {
    font-size: 14px;
  }
  .icon {
    cursor: pointer;
  }
}
</style>
