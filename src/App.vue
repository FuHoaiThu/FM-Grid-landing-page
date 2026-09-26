<script setup>
import Footer from './components/Footer.vue'
import GridContent from './components/GridContent.vue'
import Header from '@/components/header/Header.vue'
</script>

<template>
  <main>
    <Header />
    <GridContent class="flex-1" />
    <Footer />
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .flex-1 {
    flex: 1;
  }
}
</style>
