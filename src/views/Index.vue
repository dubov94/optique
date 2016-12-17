<style lang='scss'>
    @import '../assets/global.scss';
    
    div {
        color: $color-blue;
    }
</style>

<template>
    <div>
        {{ message }}
    </div>
</template>

<script>
export default {
    data () {
        return {
            message: 'Hello, world!'
        }
    }
}
</script>