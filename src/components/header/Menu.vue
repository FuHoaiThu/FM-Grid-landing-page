<template>
  <Transition name="menu">
    <div class="menu" data-test="menu" v-if="isOpen">
      <ul>
        <li v-for="menu in MENUS" :key="menu.id">
          {{ menu.title }}
        </li>
      </ul>
    </div>
  </Transition>
</template>
<script setup>
const MENUS = [
  {
    id: 0,
    title: 'About',
  },
  {
    id: 1,
    title: 'OurWork',
  },
  {
    id: 2,
    title: 'Partners',
  },
  {
    id: 3,
    title: 'Annual Report',
  },
  {
    id: 4,
    title: 'Donate',
  },
]
const props = defineProps({
  isOpen: {
    type: Boolean,
  },
})
</script>
<style lang="scss" scoped>
@use '@/assests/scss/variables.scss' as *;

.menu {
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  width: 100%;
  right: 0;
  width: 100vw;
  height: 100vh;
  top: 73px;
}
.menu ul {
  width: fit-content;
  padding: 48px;
  background-color: $color-blue-700;
  text-align: right;
  margin-left: auto;
  height: 100vh;
  min-width: 396px;
  transform: translateX(0);
}
.menu .menu--open {
  right: 0;
}
.menu ul li {
  list-style: none;
  font-size: 32px;
  line-height: 1.6;
  color: $color-neutral-0;
}
.menu-enter-active ul,
.menu-leave-active ul {
  transition: transform 0.5s ease-in-out;
}

.menu-enter-from ul,
.menu-leave-to ul {
  transform: translateX(100%);
}

.menu-enter-to ul,
.menu-leave-from ul {
  transform: translateX(0);
}
</style>
