<style lang="scss" scoped>
    @import 'styles.scss';

    .double-text {
        margin-top: $wrapper-offset;
        text-align: center;
    }
</style>

<template>
    <div class="double-text">
        <div class="double-text__black">
            <router-link to="/cinema/pierrot">&laquo;Бедный Пьеро&raquo;</router-link><br>
            <router-link to="/cinema/clown">&laquo;Клоун и его собачки&raquo;</router-link><br>
            <router-link to="/cinema/bock">&laquo;Кружка пива&raquo;</router-link>
        </div>
        <div class="double-text__blue">
            <router-link to="/cinema/pierrot">Pauvre Pierrot</router-link><br>
            <router-link to="/cinema/clown">Clown et ses chiens</router-link><br>
            <router-link to="/cinema/bock">Un bon bock</router-link>
        </div>
    </div>
</template>

<script>
    export default {}
</script>
