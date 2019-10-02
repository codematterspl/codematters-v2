<template>
    <div>
    <section class="discussion">
        <div class="discussion__image">
            <img class="image" src="@/assets/images/discussion.png" />
        </div>
        <div class="discussion__description">
            <h1>Omówimy z Tobą kazdy detal!</h1>
            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam ut imperdiet dolor, in aliquet justo.</p>
        </div>
    </section>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
@import './styles.scss';

.discussion {
    display: flex;
    flex-direction: column;
    text-align: center;
    min-height: 100vh;

    @include breakpoint($md) {
        min-height: 50vh;
        align-items: center;
    }

    &__description {
        @include description-container();
        padding-top: 32px;
        order: 1;
    }

    &__image {
        @include image-container();
        padding-top: 32px;
        order: 2;
    }

    @include breakpoint($md) {
        flex-direction: row;
        text-align: left;

        &__description {
            order: 2;
        }

        &__image {
            order: 1;
        }
    }
}
</style>
