<template>
    <v-card
    elevation="1"
    outlined
    class="pt-5 pr-5 pl-5 pb-5 d-flex flex-column justify-between"
   
    >
        <div class="">
            <v-lazy
            :options="{'threshold':0.5}"
            transition="fade-transition">
                <v-img
                :src="character.image"
                ></v-img>
            </v-lazy>
            <v-card-title>
                {{character.name}}
            </v-card-title>
            <div class="d-flex align-center mt-3">
                <status-circle
                :status="character.status"/>
                <v-card-subtitle>
                    {{character.status}} - {{character.species}}
                </v-card-subtitle>
            </div>
            <div class="info__text mt-2">
                Gender:
            </div>
            <v-card-subtitle>
                {{character.gender}}
            </v-card-subtitle>
            <div class="info__text mt-3">
                Last known location:
            </div>
            <v-card-subtitle>
                {{character.location.name}}
            </v-card-subtitle>
        </div>
            <div class="learn-button mt-5">
                <router-link :to="{ name: 'character/id', params: { id: character.id }}">
                    <v-btn
                    class="mt-auto"
                    block
                    outlined
                    elevation="0"
                    >
                        Learn more
                    </v-btn>
                </router-link>
            </div>
    </v-card>
</template>

<script>
import StatusCircle from '@/components/card-elements/StatusCircle.vue'
export default {
    components:{
        StatusCircle
    },
    props:{
        character: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .v-card__title{
        padding: 10px 0 0 0;
        font-size: 1.65em;
    }
    .v-card__subtitle{
        padding: 0 0 0 0;
        font-size: 16px;
    }
    .theme--dark.v-card > .v-card__text, .theme--dark.v-card > .v-card__subtitle{
        color: #fff;
    }
    .circle{
        width: 10px;
        height: 10px;
        border-radius: 50%;
    }
    .learn-button{
        margin-top: auto;
    }
</style>