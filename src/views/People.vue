<style lang="scss" scoped>
    @import '../assets/global.scss';
</style>

<template>
    <div class="container--center">
        <div class="wrapper">
            <c-header :title="['Люди', 'People']" :oq="true"></c-header>
        </div>
    </div>
</template>

<script>
    import Header from '../components/Header.vue'

    export default {
        components: {
            'c-header': Header
        }
    }
</script>
