<template>
  <Transition name="menu">
    <nav
      class="menu"
      data-test="menu"
      v-if="isOpen"
      id="mobile-navigation"
      aria-label="Main navigation"
    >
      <ul>
        <li v-for="menu in MENUS" :key="menu.id">
          <a :href="menu.href">
            {{ menu.title }}
          </a>
        </li>
      </ul>
    </nav>
  </Transition>
</template>
<script setup>
const MENUS = [
  {
    id: 0,
    title: 'About',
    href: '#about',
  },
  {
    id: 1,
    title: 'OurWork',
    href: '#our-work',
  },
  {
    id: 2,
    title: 'Partners',
    href: '#partners',
  },
  {
    id: 3,
    title: 'Annual Report',
    href: '#annual-report',
  },
  {
    id: 4,
    title: 'Donate',
    href: '#donate',
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
}
.menu ul li a {
  font-size: 32px;
  line-height: 1.6;
  color: $color-neutral-0;
  text-decoration: none;
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
