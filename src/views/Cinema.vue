<style lang="scss" scoped>
    @import '../assets/global.scss';

    .double-text {
        margin-top: $wrapper-offset;
        text-align: center;
    }
</style>

<template>
    <div class="container--center">
        <div class="wrapper">
            <c-header :title="['Кино', 'Cinema']" :oq="true"></c-header>
            <div class="double-text">
                <div class="double-text__black">
                    &laquo;Бедный Пьеро&raquo;<br>
                    &laquo;Клоун и его собачки&raquo;<br>
                    &laquo;Кружка пива&raquo;
                </div>
                <div class="double-text__blue">
                    Pauvre Pierrot<br>
                    Clown et ses chiens<br>
                    Un bon bock
                </div>
            </div>
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
