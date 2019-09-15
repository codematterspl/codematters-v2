<template>
    <div class="landing">
        <Offer />
        <Discussion />
    </div>
</template>
<script>
import Offer from './landing/Offer'
import Discussion from './landing/Discussion'

export default {
    components: {
        Offer,
        Discussion,
    },
}
</script>
<style lang="scss" scoped>
.landing {
    display: flex;
    flex-direction: column;
}
</style>
