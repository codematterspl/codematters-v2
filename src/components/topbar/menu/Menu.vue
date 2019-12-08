<template>
    <div class="menu">
        <div class="menu__desktop">
            <router-link to="/offer" class="menu-item">Oferta</router-link>
            <router-link to="/about" class="menu-item">O nas</router-link>
            <router-link to="/portfolio" class="menu-item">Portfolio</router-link>
            <router-link to="/contact" class="menu-item">Kontakt</router-link>
        </div>
        <div class="menu__mobile">
        </div>
        <Hamburger class="menu__hamburger" />
    </div>
</template>
<script>
import Hamburger from './Hamburger'

export default {
    components: {
        Hamburger,
    },
}
</script>
<style lang="scss" scoped>
.menu {
    &__desktop {
        display: none;

        @include breakpoint($lg) {
            display: block;
        }

        .menu-item {
            margin: 0 16px;
            font-size: 16px;
            text-decoration: none;
            color: $textSecondary;
            transition: all 0.3s;

            &:hover {
                text-decoration: underline;
                color: $textAdditional;
            }
        }
    }

    &__mobile {
        @include breakpoint($lg) {
            display: none;
        }
    }

    &__hamburger {
        @include breakpoint($lg) {
            display: none;
        }
    }
}
</style>
