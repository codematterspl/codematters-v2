<template>
    <div class="socials">
        <a href="" class="socials__item">
            <img src="@/assets/images/instagram.png" />
        </a>
        <a href="" class="socials__item">
            <img src="@/assets/images/facebook.png" />
        </a>
    </div>
</template>

<script>

export default {
    name: 'Socials',
};

</script>

<style lang="scss" scoped>
    .socials {
        display: flex;
        width: fit-content;

        &__item {
            margin-right: 22px;

            &:last-child {
                margin-right: 0px;
            }
        }
    }

</style>
