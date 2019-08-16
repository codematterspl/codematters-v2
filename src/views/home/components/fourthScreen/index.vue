<template>
  <section class="steps-screen">
    <div class="steps-screen__container">
      <img src="@/views/home/components/fourthScreen/assets/fourth-screen-image.png" class="steps-screen__image"/>
      <div class="steps-screen__content">
        <p class="steps-screen__title">Omówimy z Tobą każdy detal!</p>
        <ul class="steps-screen__list">
          <li class="steps-screen__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li class="steps-screen__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li class="steps-screen__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li class="steps-screen__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li class="steps-screen__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li class="steps-screen__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li class="steps-screen__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'stepsScreen',
};
</script>

<style lang="scss" scoped>
.steps-screen {
  padding-top:30px;
  padding-bottom:30px;
  @include breakpoint($lg) {
    padding-top:100px;
    padding-bottom:100px;
  }
  &__container {
    @include container;
    display:flex;
    flex-direction: column;
    align-items: center;
    @include breakpoint($sm) {
      flex-direction: inherit;
      justify-content: space-between;
    }
  }
  &__image {
    order:2;
    margin-top:30px;
    width:369px;
    height:352px;
    @include breakpoint($sm) {
      width:311px;
      height:334px;
    }
    @include breakpoint($lg) {
      width:540px;
      height:578px;
    }
  }
  &__content {
    width:100%;
    order:1;
    @include breakpoint($sm) {
      width:320px;
    }
    @include breakpoint($md) {
      width:500px;
    }
  }
  &__title {
    font-size:24px;
    font-weight:900;
    line-height:29px;
    text-align: center;
    color:$textPrimary;
    margin-bottom:30px;
    @include breakpoint($sm) {
      text-align: left;
      width:309px;
    }
    @include breakpoint($md) {
      font-size:32px;
      line-height:39px;
      width:436px;
    }
  }
  &__list {
    list-style:none;
  }
  &__item {
    font-size:12px;
    font-weight:500;
    line-height:24px;
    text-align: center;
    color:$textPrimary;
    @include breakpoint($sm) {
      text-align: left;
      font-size:14px;
    }
    @include breakpoint($lg) {
      margin-bottom:20px;
    }
  }
}
</style>
