<style lang="scss" scoped>
    @import '../assets/global.scss';

    .double-text {
        text-align: center;
    }
    
    .footer {
        margin-top: 41px;
        text-align: center;

        > img {
            height: $logo-height;
            width: auto;
        }
    }
</style>

<template>
    <div class="container--center">
        <div class="wrapper">
            <c-header :title="null" :oq="false"></c-header>
            <div class="double-text">
                <div class="double-text__black">
                    Тысяча<br>
                    восемьсот<br>
                    девяносто вто-<br>
                    рой год по гри-<br>
                    горианскому<br>
                    календарю
                </div>
                <div class="double-text__blue">
                    One thousand<br>
                    eight hundred<br>
                    and ninety-sec-<br>
                    ond year in the<br>
                    gregorian<br>
                    calendar
                </div>
            </div>
            <div class="footer">
                <img src="../assets/images/optique.png">
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
