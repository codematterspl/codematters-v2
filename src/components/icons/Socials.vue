<template>
  <div class="socials">
    <a href="" class="socials__item">
      <Facebook />
    </a>
    <a href="" class="socials__item">
      <Instagram />
    </a>
    <a href="" class="socials__item">
      <Linkedin />
    </a>
  </div>
</template>

<script>
import Facebook from '@/components/icons/assets/FacebookIcon.vue';
import Instagram from '@/components/icons/assets/InstagramIcon.vue';
import Linkedin from '@/components/icons/assets/LinkedinIcon.vue';

export default {
  name: 'Socials',
  components: {
    Facebook,
    Instagram,
    Linkedin,
  },
};
</script>

<style lang="scss" scoped>
.socials {
  display:flex;
  width:fit-content;
  &__item {
    margin-right:22px;
    &:last-child {
      margin-right:0px;
    }
  }
}
</style>
