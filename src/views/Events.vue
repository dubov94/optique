<style lang="scss" scoped>
    @import '../assets/global.scss';
</style>

<template>
    <div class="container--center">
        <div class="wrapper">
            <c-header :title="['События', 'Events']" :oq="true"></c-header>
            <router-view></router-view>
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