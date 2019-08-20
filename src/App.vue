<template>
    <div id="app">
        <AppHeader />
        <router-view />
    </div>
</template>

<script>
import AppHeader from '@/components/layout/header/AppHeader.vue';

export default {
    name: 'App',
    components: {
        AppHeader,
    },
};

</script>


<style lang="scss">
    #app {
        @import url('https://fonts.googtleapis.com/css?family=Montserrat:400,500,600,700,800,900&display=swap');
        font-family: 'Montserrat', sans-serif;
        position: relative;
    }

</style>
