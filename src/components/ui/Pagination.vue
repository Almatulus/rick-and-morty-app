<template>
    <v-row class="justify-center">
        <v-pagination
        class="mb-4"
        v-model="page"
        :length="pages"
        :total-visible="8"
        ></v-pagination>
    </v-row>
</template>

<script>
export default {
    props:{
        pages: {
            type: Number
        }
    },
    data: () => ({
        page: 1
    }),
    methods:{
        selectedPage(page){
            this.$emit('selectedPage', page)
        }
    },
    watch: {
        page(newPage) {
            this.selectedPage(newPage)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>