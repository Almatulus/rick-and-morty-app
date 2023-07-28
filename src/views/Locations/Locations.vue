<template>
    <div class="locations">
        <v-row>
            <v-col
            cols="6"
            v-for="location in locations.results"
            :key="location.id">
                <location-card
                :location="location"/>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import axiosInstance from '../../api/instance'
import LocationCard from '@/components/locations/LocationCard.vue'
export default {
    components: {
        LocationCard
    },
    data: () => ({
        locations: {},
        residentIdList: [],

    }),
    methods:{
        fetchLocations(){
            axiosInstance.get('/location')
            .then((response) => {
                this.locations = response.data
                // this.locations.results.forEach(element => {
                //     console.log(element.residents)
                // });
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
    created(){
        this.fetchLocations()
    }
}
</script>

<style lang="scss" scoped>

</style>