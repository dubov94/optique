<style lang="scss" scoped>
    @import '../assets/global.scss';

    .header {
        position: relative;
        display: flex;
    }

    .caption {
        text-transform: uppercase;
        font-family: 'Din B';
        font-size: 14pt;

        &--blue {
            color: $color-blue;
            margin-top: -7px;
        }
    }

    .title {
        position: absolute;
        right: calc(100% + 20px);
        direction: rtl;
    }

    .oq {
        flex-grow: 1;
        text-align: center;

        img {
            height: $logo-height;
            width: auto;
        }
    }

    .menu {
        position: absolute;
        left: calc(100% + 20px);

        &__icon {
            margin-top: 7px;

            img {
                height: 24px;
                width: calc(100% - 3px);
            }
        }
    }
</style>

<template>
    <div class="header">
        <div class="title">
            <div class="caption" v-if="title !== null">
                <router-link :to="address">
                    <div class="caption--black">
                        {{ title[0] }}
                    </div>
                    <div class="caption--blue">
                        {{ title[1] }}
                    </div>
                </router-link>
            </div>
        </div>
        <div class="oq">
            <router-link to="/">
                <img v-if="oq" src="../assets/images/oq.png">
            </router-link>
        </div>
        <div class="menu">
            <router-link to="/menu">
                <div class="caption">
                    <div class="caption--black">
                        Меню
                    </div>
                    <div class="caption--blue">
                        Menu
                    </div>
                </div>
                <div class="menu__icon">
                    <img src="../assets/images/menu.png">
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title', 'oq', 'address']
    }
</script>
