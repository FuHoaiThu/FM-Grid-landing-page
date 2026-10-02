<template>
  <div class="card">
    <div class="card-header">
      <component :is="card.icon" />
      <p>{{ card.value }}</p>
    </div>
    <div class="card-content">
      <p data-test="card-header-title" class="card-content__title">{{ card.title }}</p>
      <p class="card-content__des">{{ card.description }}</p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  card: {
    type: Object,
    default: () => {},
  },
})
</script>
<style lang="scss" scoped>
@use '../assests/scss/variables.scss' as *;

.card {
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 328px;
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 36px;
      color: $color-neutral-0;
    }
  }
  .card-content {
    .card-content__title {
      font-size: 17px;
      line-height: 165%;
    }
    .card-content__des {
      font-size: 14px;
      line-height: 142%;
      color: $color-blue-200;
      font-weight: 400;
    }
  }
  @media screen and (max-width: 425px) {
    padding: 24px;
  }
}
</style>
