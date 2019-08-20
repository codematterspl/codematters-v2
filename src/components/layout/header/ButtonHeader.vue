<template>
    <button
        @click="openMenu"
        class="button"
        :class="{active: buttonMenu}"
    >
        <div></div>
        <div></div>
        <div></div>
    </button>
</template>

<script>
export default {
    name: 'ButtonHeader',
    props: {
        buttonMenu: {
            type: Boolean,
            required: true,
        },
    },
    methods: {
        openMenu() {
            this.$emit('openMenu');
        },
    },
};

</script>

<style lang="scss" scoped>
    .button {
        background: transparent;
        border: 0px;
        position: relative;
        z-index: 1;

        @include breakpoint($md) {
            display: none;
        }

        div {
            width: 35px;
            height: 5px;
            border-radius: 4px;
            margin-bottom: 6px;
            background-color: $buttonMenu;
            transition: 0.5s;

            &:last-child {
                margin-bottom: 0px;
            }
        }

        &.active {
            div:nth-of-type(1) {
                transform: rotate(45deg);
            }

            div:nth-of-type(2) {
                transform: rotate(-45deg);
                margin-top: -12px;
            }

            div:nth-of-type(3) {
                opacity: 0;
            }
        }
    }

</style>
