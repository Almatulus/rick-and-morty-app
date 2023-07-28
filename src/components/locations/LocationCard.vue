<template>
    <div class="">
        <v-card
        elevation="1"
        outlined
        class="pt-5 pr-5 pl-5 pb-5 d-flex flex-column justify-between">
            <v-card-title>
                {{location.name}}
            </v-card-title>
            <v-card-subtitle class="d-flex align-center">
                <span class="subtitle-title">Type:</span>
                <span class="ml-3">{{location.type}}</span>
            </v-card-subtitle>
            <v-card-subtitle>
                <span class="subtitle-title">Dimension:</span>
                <span class="ml-3">{{location.dimension}}</span>
            </v-card-subtitle>
            <v-btn
            class="mt-5"
            text
            elevation="0"
            @click.prevent="dialog = true"
            >
                Show more
            </v-btn>
        </v-card>
        <location-dialog
        
        :isActive="dialog"/>
    </div>
</template>

<script>
import LocationDialog from '@/components/locations/LocationDialog.vue'
export default {
    components:{
        LocationDialog
    },
    props: {
        location: {
            type: Object
        }
    },
    data: () => ({
        dialog: false
    })
}
</script>

<style lang="scss" scoped>
.v-card__title{
        padding: 25px 0 0 0;
        font-size: 35px;
    }
    .v-card__subtitle{
        padding: 16px 0 0 0;
        font-size: 16px;
    }
    .theme--dark.v-card > .v-card__text, .theme--dark.v-card > .v-card__subtitle{
        color: #fff;
    }
    .v-card__title + .v-card__subtitle {
        margin-top: 0px;
    }
    .subtitle-title{
        color: rgb(158, 158, 158);
    }
</style>