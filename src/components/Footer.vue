<template>
    <footer class="footer">
        <span class="footer__copyrights">Copyright © 2019  All Rights Reserved by codematters</span>
    </footer>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.footer {
    @include page-paddings;
    background-color: #F9F9F9;

    &__copyrights {
        font-size: 12px;
        font-weight: 500;
        color: $textSecondary;
        text-align: right;
        display: block;
    }
}
</style>
