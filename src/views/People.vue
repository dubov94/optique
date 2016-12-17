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
            @extend .abs-full;

            background: $color-white;
            opacity: 0;
            transition: all 250ms ease;

            &:hover {
                opacity: 1;
            }

            $border-width: 10px;
            &::after {
                @extend .abs-full;
                content: '';
                border: $border-width solid $color-blue;
            }

            &[data-x='0']::after {
                left: -$border-width;
            }

            &[data-y='0']::after {
                top: -$border-width;
            }

            &[data-x='2']::after {
                right: -$border-width;
            }

            &[data-y='2']::after {
                bottom: -$border-width;
            }
        }
    }
</style>

<template>
    <div class="container--center">
        <div class="wrapper">
            <c-header :title="['Люди', 'People']" :oq="true"></c-header>
            <div class="heroes">
                <div v-for="(hero, index) in heroes"
                     :class="'hero hero--' + hero">
                    <div class="hero__cover" :data-x="index % 3" :data-y="Math.floor(index / 3)">

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
