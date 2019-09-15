<template>
    <div id="app">
        <Topbar />
        <router-view />
        <Footer />
    </div>
</template>
<script>
import Topbar from '@/components/topbar/Topbar'
import Footer from '@/components/Footer'

export default {
    components: {
        Topbar,
        Footer,
    },
    name: 'App',
};

</script>
<style lang="scss">
#app {
    @import url('https://fonts.googtleapis.com/css?family=Montserrat:400,500,600,700,800,900&display=swap');
    font-family: 'Montserrat', sans-serif;
    position: relative;
}
</style>
