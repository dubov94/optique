<style lang="scss" scoped>
    @import '../assets/global.scss';

    $heroes: hardy weixler warner pickford falconetti aoki stonehouse shipman normand;
    @each $hero in $heroes {
        .hero--#{$hero} {
            background-image: url(../assets/images/heroes/#{$hero}.png);
        }
    }

    .heroes {
        margin-top: $wrapper-offset;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .hero {
        position: relative;
        background-size: 100% 100%;
        width: #{700px / 3};
        height: 150px;

        &__cover {
            position: absolute;
        }
    }
</style>

<template>
    <div class="container--center">
        <div class="wrapper">
            <c-header :title="['Люди', 'People']" :oq="true"></c-header>
            <div class="heroes">
                <div v-for="hero in heroes"
                     :class="'hero hero--' + hero">
                    <div class="hero__cover">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '../components/Header.vue'

    export default {
        data() {
            return {
                heroes: [
                    'hardy',
                    'weixler',
                    'warner',
                    'pickford',
                    'falconetti',
                    'aoki',
                    'stonehouse',
                    'shipman',
                    'normand'
                ]
            }
        },
        components: {
            'c-header': Header
        }
    }
</script>
