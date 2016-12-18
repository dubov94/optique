<style lang="scss" scoped>
    @import 'styles.scss';

    $heroes: hardy weixler warner pickford falconetti aoki stonehouse shipman normand;
    @each $hero in $heroes {
        .hero--#{$hero} {
            background-image: url(../../assets/images/heroes/#{$hero}.png);
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
        width: #{$page-width / 3};
        height: 150px;

        &__cover {
            @extend .abs-full;

            background: $color-white;
            opacity: 0;
            transition: all 500ms ease;

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

            display: flex;
            justify-content: center;
            align-items: center;
            
            > div {
                text-align: center;
                
                > span {
                    @extend .fheader;
                    text-transform: uppercase;

                    &:first-of-type {
                        color: $color-black;
                    }

                    &:last-of-type {
                        color: $color-blue;
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="heroes">
        <div v-for="(hero, index) in heroes"
                :class="'hero hero--' + hero.id">
            <router-link :to="'/people/' +  hero.id">
                <div class="hero__cover" :data-x="index % 3" :data-y="Math.floor(index / 3)">
                    <div>
                        <span>{{ hero.names[0] }}\</span><br>
                        <span>\{{ hero.names[1] }}</span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import Heroes from '../../heroes.js'

    export default {
        data() {
            return {
                heroes: Heroes,
            }
        }
    }
</script>
