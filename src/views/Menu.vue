<style lang="scss" scoped>
    @import '../assets/global.scss';

    .layer {
        display: flex;
        justify-content: center;
    }

    .double-text {
        $shift: 205px;
        margin-top: 50px;

        &__black {
            width: $shift + 305px;
        }

        &__blue {
            left: $shift;
        }
    }
</style>

<template>
    <div class="container--center">
        <div class="wrapper">
            <c-header :title="null" :oq="true"></c-header>
            <div class="layer">
                <div class="double-text">
                    <div class="double-text__black">
                        <router-link to="/cinema">Кино</router-link><br>
                        <router-link to="/people">Люди</router-link><br>
                        <router-link to="/events">События</router-link><br>
                    </div>
                    <div class="double-text__blue">
                        <router-link to="/cinema">Cinema</router-link><br>
                        <router-link to="/people">People</router-link><br>
                        <router-link to="/events">Events</router-link><br>
                    </div>
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
