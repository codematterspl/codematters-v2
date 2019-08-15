<template>
  <section class="first-screen">
    <div class="first-screen__box">
      <h1 class="first-screen__title">We are developers who care!</h1>
      <h2 class="first-screen__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut imperdiet dolor, in aliquet justo.</h2>
      <a href="" class="first-screen__button button-small button-small--primary">Check out our offer!</a>
      <Socials class="first-screen__socials" />
    </div>
    <img src="@/views/home/components/firstScreen/assets/first-screen-image.png" class="first-screen__image"/>
  </section>
</template>

<script>
import Socials from '@/components/icons/Socials.vue';

export default {
  name: 'FirstScreen',
  components: {
    Socials,
  },
};
</script>

<style lang="scss" scoped>
.first-screen {
  @include container;
  @include breakpoint($lg) {
    display:flex;
    align-items: center;
    justify-content: space-between;
  }
  &__box {
    width:100%;
    @include breakpoint($lg) {
      width:502px;
    }
  }
  &__title {
    font-size:31px;
    font-weight:900;
    color:$textPrimary;
    line-height:39px;
    text-align: center;
    margin-bottom:20px;
    @include breakpoint($md) {
      font-size:48px;
      line-height:59px;
      width:500px;
      margin-left:auto;
      margin-right:auto;
    }
    @include breakpoint($lg) {
      text-align: left;
      line-height:58px;
    }
  }
  &__content {
    font-size:16px;
    font-weight:500;
    color:$textSecondary;
    line-height:16px;
    text-align: center;
    margin-bottom:25px;
    @include breakpoint($sm) {
      font-size:16px;
      line-height:24px;
    }
    @include breakpoint($lg) {
      text-align: left;
      margin-bottom:35px;
    }
  }
  &__button {
    margin:0 auto;
    @include breakpoint($lg) {
      margin:0px 0px 64px 0px;
    }
  }
  &__socials {
    margin:32px auto 0 auto;
    @include breakpoint($lg) {
      margin:32px 0px 0px 0px;
    }
  }
  &__image {
    margin-top:30px;
    width:350px;
    height:255px;
    @include breakpoint($sm) {
      width:100%;
      height:auto;
    }
    @include breakpoint($lg) {
      width:725px;
      height:auto;
      margin-top:0px;
    }
  }
}
</style>
