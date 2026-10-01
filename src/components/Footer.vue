<template>
  <footer>
    <p>© 2026 Bridge Collective</p>
    <p>Registered charity 12345678</p>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 48px;
  font-size: 14px;
  line-height: 142%;
  @media screen and (max-width: 425px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
  }
}
</style>
