<template>
  <section class="second-screen">
    <div class="second-screen__container">
      <p class="second-screen__title">PROFESJONALIŚCI W SWOIM FACHU!</p>
      <div class="second-screen__container-box">
        <div class="second-screen__box">
          <IconOne class="second-screen__image" />
          <p class="second-screen__title-box">100%</p>
          <p class="second-screen__content">ZADOWLONYCH KLIENTÓW</p>
        </div>
        <div class="second-screen__box">
          <IconTwo class="second-screen__image" />
          <p class="second-screen__title-box">100%</p>
          <p class="second-screen__content">ZADOWLONYCH KLIENTÓW</p>
        </div>
        <div class="second-screen__box">
          <IconThree class="second-screen__image" />
          <p class="second-screen__title-box">100%</p>
          <p class="second-screen__content">ZADOWLONYCH KLIENTÓW</p>
        </div>
        <div class="second-screen__box">
          <IconFour class="second-screen__image" />
          <p class="second-screen__title-box">100%</p>
          <p class="second-screen__content">ZADOWLONYCH KLIENTÓW</p>
        </div>
      </div>
      <a href="" class="second-screen__button button-small button-small--secondary">Zobacz nasze projekty</a>
    </div>
  </section>
</template>

<script>
import IconOne from '@/views/home/components/secondScreen/assets/IconOne.vue';
import IconTwo from '@/views/home/components/secondScreen/assets/IconTwo.vue';
import IconThree from '@/views/home/components/secondScreen/assets/IconThree.vue';
import IconFour from '@/views/home/components/secondScreen/assets/IconFour.vue';

export default {
  name: 'SecondScreen',
  components: {
    IconOne,
    IconTwo,
    IconThree,
    IconFour,
  },
};
</script>

<style lang="scss" scoped>
.second-screen {
  background-color:$backgroundSecondary;
  padding-top:40px;
  padding-bottom:40px;
  &__container {
    @include container;
  }
  &__title {
    font-size:24px;
    font-weight:900;
    line-height:36px;
    color:$textPrimary;
    text-align: center;
    width:100%;
    margin-bottom:95px;
  }
  &__container-box {
    display:flex;
    flex-flow: row wrap;
  }
  &__box {
    flex:100%;
    margin-bottom:20px;
    @include breakpoint($sm) {
      flex:50%;
    }
    @include breakpoint($md) {
      flex:25%;
      margin-bottom:0px;
    }
  }
  &__image {
    margin:0px auto 20px auto;
    display:block;
  }
  &__title-box {
    font-size:24px;
    font-weight:700;
    color:$textAdditional;
    text-transform: uppercase;
    text-align: center;
    margin-bottom:20px;
  }
  &__content {
    font-size:16px;
    font-weight:700;
    color:$textSecondary;
    text-transform: uppercase;
    text-align: center;
  }
  &__button {
    margin:80px auto 0px auto;
  }
}
</style>
