<template>
    <section class="offer">
        <div class="offer__description">
            <h1>We are developers<br />who care!</h1>
            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam ut imperdiet dolor, in aliquet justo.
            </p>
            <router-link to="/offer" tag="button" class="button">Check out our offer!</router-link>
            <div class="socials">
                <Icon class="social" name="instagram" />
                <Icon class="social" name="facebook" />
            </div>
        </div>
        <div class="offer__image">
            <img class="image" src="@/assets/images/office.png" />
        </div>
    </section>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
@import './styles.scss';

.offer {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    min-height: calc(100vh - (48px * 2 + 16px));

    @include breakpoint($lg) {
        min-height: calc(100vh - 48px * 3);
        flex-direction: row;
        text-align: left;
    }

    &__description {
        @include description-container();

        .button {
            background-color: #ED274F;
            height: 56px;
            width: 100%;
            font-size: 16px;
            color: #fff;
            margin-top: 24px;

            @include breakpoint($md) {
                width: 420px;
            }

            @include breakpoint($lg) {
                width: 272px;
            }
        }

        .text {
            padding: 16px 0;

            @include breakpoint($md) {
                padding: 32px 0;
                padding-right: 32px;
            }
        }

        .socials {
            margin-top: 32px;
            display: flex;

            .social {
                fill: $textSecondary;
            }

            .social:nth-child(2) {
                margin-left: 16px;
            }
        }
    }

    &__image {
        @include image-container();
        margin-top: 32px;
    }
}
</style>
