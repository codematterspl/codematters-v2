<template>
    <div class="offer-screen">
        <div class="offer-screen__container">
            <div class="offer-screen__box">
                <p class="offer-screen__title">Standard</p>
                <p class="offer-screen__price">200 zł <span>PLN/miesiąc</span></p>
                <ul class="offer-screen__list">
                    <li class="offer-screen__item">Lorem ipsum</li>
                    <li class="offer-screen__item">Lorem ipsum</li>
                    <li class="offer-screen__item">Lorem ipsum</li>
                    <li class="offer-screen__item">Lorem ipsum</li>
                    <li class="offer-screen__item">Lorem ipsum</li>
                </ul>
                <router-link class="offer-screen__button button-small button-small--secondary" to="">Zobacz więcej</router-link>
            </div>
            <div class="offer-screen__box">
                <p class="offer-screen__title">medium</p>
                <p class="offer-screen__price">200 zł <span>PLN/miesiąc</span></p>
                <ul class="offer-screen__list">
                    <li class="offer-screen__item">Lorem ipsum</li>
                    <li class="offer-screen__item">Lorem ipsum</li>
                    <li class="offer-screen__item">Lorem ipsum</li>
                    <li class="offer-screen__item">Lorem ipsum</li>
                    <li class="offer-screen__item">Lorem ipsum</li>
                </ul>
                <router-link class="offer-screen__button button-small button-small--secondary" to="">Zobacz więcej</router-link>
            </div>
            <div class="offer-screen__box">
                <p class="offer-screen__title">Pro</p>
                <p class="offer-screen__price">200 zł <span>PLN/miesiąc</span></p>
                <ul class="offer-screen__list">
                    <li class="offer-screen__item">Lorem ipsum</li>
                    <li class="offer-screen__item">Lorem ipsum</li>
                    <li class="offer-screen__item">Lorem ipsum</li>
                    <li class="offer-screen__item">Lorem ipsum</li>
                    <li class="offer-screen__item">Lorem ipsum</li>
                </ul>
                <router-link class="offer-screen__button button-small button-small--secondary" to="">Zobacz więcej</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SixthScreen',
};

</script>

<style lang="scss" scoped>
    .offer-screen {
        width: 100%;
        background-color: $backgroundSecondary;
        padding-top: 15px;
        padding-bottom: 15px;

        &__container {
            @include container;

            @include breakpoint($md) {
                display: flex;
                flex-wrap: wrap-reverse;
                justify-content: space-between;
            }
        }

        &__box {
            width: 100%;
            padding: 30px 20px 30px 20px;
            border-radius: 5px;
            box-sizing: border-box;
            margin-bottom: 30px;
            transition: 0.5s;
            cursor: pointer;

            @include breakpoint($sm) {
                width: 50%;
                margin: 0 auto;
            }

            @include breakpoint($md) {
                width: 33.3%;
            }

            &:hover {
                background-color: $backgroundPrimary;
                box-shadow: 0px 0px 6px rgba(black, 0.3);
            }
        }

        &__title {
            font-size: 24px;
            font-weight: 700;
            color: $textSecondary;
            text-align: center;
            text-transform: uppercase;
            margin-bottom: 30px;
        }

        &__price {
            font-size: 20px;
            font-weight: 700;
            color: $textSecondary;
            text-align: center;
            margin-bottom: 30px;

            @include breakpoint($lg) {
                font-size: 48px;
            }

            span {
                font-size: 16px;
            }
        }

        &__list {
            list-style: none;
            margin-bottom: 70px;
        }

        &__item {
            font-size: 14px;
            font-weight: 500;
            color: $textSecondary;
            line-height: 18px;
            margin-bottom: 15px;
        }

        &__button {
            margin: 0 auto;
        }
    }

</style>
