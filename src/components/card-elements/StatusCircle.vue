<template>
    <div
    :style="{ width: width ? width : '', height: height ? height : '' }" 
    class="circle mr-3"
    :class="getClassByStatus"></div>
</template>

<script>
export default {
    props: {
        status:{
            type: String
        },
        width:{
            type: String,
            default: '10px'
        },
        height:{
            type: String,
            default: '10px'
        }
    },
    computed:{
        getClassByStatus(){
            return{
                dead: this.status === 'Dead',
                alive: this.status === 'Alive',
                unknown: this.status === 'unknown'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .dead{
        background-color: rgb(214, 61, 46);
    }
    .alive{
        background-color: rgb(85, 204, 68);
    }
    .unknown{
        background-color: rgb(158, 158, 158);
    }
    .circle{
        border-radius: 50%;
    }
</style>