<template>
    <div class="home">
        <FirstScreen />
        <SecondScreen />
        <ThirdScreen />
        <FourthScreen />
        <FifthScreen />
        <SixthScreen />
    </div>
</template>

<script>
import FirstScreen from '@/views/home/components/firstScreen/index.vue';
import SecondScreen from '@/views/home/components/secondScreen/index.vue';
import ThirdScreen from '@/views/home/components/thirdScreen/index.vue';
import FourthScreen from '@/views/home/components/fourthScreen/index.vue';
import FifthScreen from '@/views/home/components/fifthScreen/index.vue';
import SixthScreen from '@/views/home/components/sixthScreen/index.vue';

export default {
    name: 'Home',
    components: {
        FirstScreen,
        SecondScreen,
        ThirdScreen,
        FourthScreen,
        FifthScreen,
        SixthScreen,
    },
};

</script>

<style lang="scss" scoped>
    .home {
        margin-top: 75px;
    }

</style>
