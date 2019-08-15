<template>
  <div class="home">
    <FirstScreen />
    <SecondScreen />
    <ThirdScreen />
    <FourthScreen />
    <FifthScreen />
  </div>
</template>

<script>
import FirstScreen from '@/views/home/components/firstScreen/index.vue';
import SecondScreen from '@/views/home/components/secondScreen/index.vue';
import ThirdScreen from '@/views/home/components/thirdScreen/index.vue';
import FourthScreen from '@/views/home/components/fourthScreen/index.vue';

export default {
  name: 'Home',
  components: {
    FirstScreen,
    SecondScreen,
    ThirdScreen,
    FourthScreen,
  },
};
</script>

<style lang="scss" scoped>
  .home {
    margin-top:75px;
  }
</style>
