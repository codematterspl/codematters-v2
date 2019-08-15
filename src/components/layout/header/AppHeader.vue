<template>
  <header class="header">
    <a href="/">
      <LogoHeader/>
    </a>
    <MenuHeader :openMenu="activeMenu"/>
    <ButtonHeader :buttonMenu="activeMenu" @openMenu="openMenu"/>
  </header>
</template>

<script>
import LogoHeader from '@/components/layout/header/LogoHeader.vue';
import MenuHeader from '@/components/layout/header/MenuHeader.vue';
import ButtonHeader from '@/components/layout/header/ButtonHeader.vue';

export default {
  name: 'AppHeader',
  components: {
    LogoHeader,
    ButtonHeader,
    MenuHeader,
  },
  data() {
    return {
      activeMenu: false,
    };
  },
  methods: {
    openMenu() {
      this.activeMenu = !this.activeMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  @include container;
  padding-top:24px;
  display:flex;
  justify-content: space-between;
  align-items: center;
}
</style>
