<style lang="scss" scoped>
    @import '../assets/global.scss';

    .header {
        position: relative;
        display: flex;
    }

    .title {
        position: absolute;
        right: calc(100% + 20px);
    }

    .oq {
        flex-grow: 1;
        text-align: center;

        > img {
            height: $logo-height;
            width: auto;
        }
    }

    .menu {
        position: absolute;
        left: calc(100% + 20px);
        
        &__caption {
            text-transform: uppercase;
            font-family: 'Din B';
            font-size: 14pt;

            &--blue {
                color: $color-blue;
                margin-top: -7px;
            }
        }

        &__icon {
            margin-top: 7px;

            img {
                height: 24px;
                width: calc(100% - 5px);
            }
        }
    }
</style>

<template>
    <div class="header">
        <div class="title">
            <span v-if="title">
                {{ title }}
            </span>
        </div>
        <div class="oq">
            <img v-if="title" src="../assets/images/oq.png">
        </div>
        <div class="menu">
            <div class="menu__caption">
                <div class="menu__caption--black">
                    Меню
                </div>
                <div class="menu__caption--blue">
                    Menu
                </div>
            </div>
            <div class="menu__icon">
                <img src="../assets/images/menu.png">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title']
    }
</script>
