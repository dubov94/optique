<style lang="scss" scoped>
    @import '../assets/global.scss';

    $shift: 46px;
    
    .main {
        position: relative;
        text-transform: uppercase;

        &--black, &--blue {
            text-align: center;
            font-family: 'Din';
            font-weight: bold;
            font-size: 60pt;
            line-height: 62pt;
        }

        &--blue {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            z-index: -1;
        }

        &--blue {
            color: $color-blue;
            top: $shift;
        }
    }

    .footer {
        margin-top: calc(41px + #{$shift});
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
            <c-header></c-header>
            <div class="main">
                <div class="main--black">
                    Тысяча<br>
                    восемьсот<br>
                    девяносто вто-<br>
                    рой год по гри-<br>
                    горианскому<br>
                    календарю
                </div>
                <div class="main--blue">
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
