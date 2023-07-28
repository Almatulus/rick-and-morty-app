<template>
    <div class="character-i">
        <v-row>
            <button-back
            pathName="Characters"
            url="/characters"/>
        </v-row>
        <v-card
        elevation="1"
        outlined
        class="pt-5 pr-5 pl-5 pb-5">
            <v-row>
                <v-col cols="5">
                    <v-img
                    :src="characterInfo.image">

                    </v-img>
                </v-col>
                <v-col cols="7">
                    <v-card-title>
                        {{characterInfo.name}}
                    </v-card-title>
                    <div class="d-flex align-center mt-2">
                        <status-circle
                        class="ml-5"
                        height="20px"
                        width="20px"
                        :status="characterInfo.status"/>
                        <v-card-subtitle class="">
                            {{characterInfo.status}} - {{characterInfo.species}}
                        </v-card-subtitle>
                    </div>
                    <div class="d-flex align-center mt-2">
                        <div class="info__text">
                            Gender:
                        </div>
                        <v-card-subtitle>
                            {{characterInfo.gender}}
                        </v-card-subtitle>
                    </div>
                    <div class="d-flex align-center mt-2">
                        <div class="info__text">
                            Origin:
                        </div>
                        <v-card-subtitle v-if="characterInfo.origin.name">
                            {{characterInfo.origin.name}}
                        </v-card-subtitle>
                    </div>
                    <div class="info__text">
                        Episodes:
                    </div>
                </v-col>
            </v-row>  
        </v-card>
    </div>
</template>

<script>
import ButtonBack from '@/components/card-elements/ButtonBack.vue'
import StatusCircle from '@/components/card-elements/StatusCircle.vue'
import axiosInstance from '../../api/instance'
export default {
    components:{
        ButtonBack,
        StatusCircle
    },
    data: () => ({
        characterInfo: {}
    }),
    methods:{
        fetchCharacterInfo(){
            axiosInstance.get(`/character/${this.$route.params.id}`)
            .then((response) => {
                console.log(response.data)
                this.characterInfo = response.data
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
    created(){
        this.fetchCharacterInfo()
    }
}
</script>

<style lang="scss" scoped>
.v-card__title{
    font-size: 4.25rem;
}
.v-card__subtitle, .v-card__text{
    font-size: 1.875rem;
}
.info__text{
    font-size: 1.875rem;
    font-weight: 500;
    color: rgb(158, 158, 158);
}
</style>