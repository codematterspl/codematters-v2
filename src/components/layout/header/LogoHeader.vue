<template>
    <img src="@/assets/images/logo.png" class="logo" />
</template>
<script>
export default {
    name: 'LogoHeader',

};

</script>

<style lang="scss" scoped>
    .logo {
        width: 167px;
        height: 25.5px;
        display:block;

        @include breakpoint($md) {
            width: 220px;
            height: 32px;
        }
    }
</style>
