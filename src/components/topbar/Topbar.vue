<template>
    <nav class="topbar">
        <Logo />
        <Menu />
    </nav>
</template>
<script>
import Logo from './Logo'
import Menu from './menu/Menu'

export default {
    components: {
        Logo,
        Menu,
    },
}
</script>
<style lang="scss" scoped>
.topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
    margin-bottom: 48px;
    height: 48px;

    @include breakpoint($lg) {
        margin: 48px 0;
    }
}
</style>
