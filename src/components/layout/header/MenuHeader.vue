<template>
  <div class="menu">
    <div
      class="menu-mobile"
      :class="{active: openMenu}"
    >
      <router-link class="menu-mobile__item" to="">Oferta</router-link>
      <router-link class="menu-mobile__item" to="">O nas</router-link>
      <router-link class="menu-mobile__item" to="">Cennik</router-link>
      <router-link class="menu-mobile__item" to="">Portfolio</router-link>
      <router-link class="menu-mobile__item" to="">Kontakt</router-link>
    </div>
    <div class="menu-desktop">
      <router-link class="menu-desktop__item" to="">Oferta</router-link>
      <router-link class="menu-desktop__item" to="">O nas</router-link>
      <router-link class="menu-desktop__item" to="">Cennik</router-link>
      <router-link class="menu-desktop__item" to="">Portfolio</router-link>
      <router-link class="menu-desktop__item" to="">Kontakt</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuHeader',
  props: {
    openMenu: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  .menu-mobile {
    position:fixed;
    right:0;
    top:0;
    width:300px;
    height:100vh;
    padding-top:100px;
    box-sizing: border-box;
    transform: translate(920px);
    background-color:$backgroundSecondary;
    transition:0.5s;
    &.active {
      transform:translate(0px);
    }
    &__item {
      font-size:16px;
      font-weight:500;
      color:$textSecondary;
      width:100%;
      padding:20px 0px 20px 30px;
      box-sizing: border-box;
      display:block;
      text-decoration: none;
    }
  }
  .menu-desktop {
    display:none;
    @include breakpoint($md) {
      display:flex;
    }
    &__item {
      font-size:16px;
      font-weight:500;
      color:$textSecondary;
      margin-right:15px;
      text-decoration: none;
      &:last-child {
        margin-right:0px;
      }
    }
  }
}
</style>
