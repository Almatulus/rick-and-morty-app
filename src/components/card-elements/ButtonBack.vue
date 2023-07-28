<template>
    <router-link
    :to="url">
        <v-btn
        class="mb-9">
            <v-icon left>
                mdi-arrow-left
            </v-icon>
            Return to {{pathName}}
        </v-btn>
    </router-link>
</template>


<script>
export default {
    props:{
        pathName: {
            type: String
        },
        url: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>

</style>