<template>
    <div class="home">
        <Landing />
        <Contact />
    </div>
</template>

<script>
import Landing from './Landing'
import Contact from './Contact'

export default {
    components: {
        Landing,
        Contact,
    },
    name: 'Home',
};
</script>
<style lang="scss" scoped>
.home {
    display: flex;
    flex-direction: column;
}
</style>
