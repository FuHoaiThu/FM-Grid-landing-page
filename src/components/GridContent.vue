<template>
  <div class="wrapper">
    <div class="col intro">
      <h1>A classroom for every child.</h1>
      <p>
        We fund the schools, train the teachers, and measure what works — so every child we reach
        today becomes a graduate tomorrow.
      </p>
    </div>
    <div class="col">Colum 1</div>
    <div class="col">Colum 1</div>
  </div>
</template>
<style lang="scss" scoped>
@use '../assests/scss/variables.scss' as *;

.wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  .col {
    border: 1px solid $color-blue-400;
  }
  .intro {
    padding: 48px;
    h1 {
      font-size: 60px;
      padding-bottom: 40px;
    }
  }
}
</style>
