<template>
    <div class="characters">
        <search-input
        @searchByValue="handleSearchValue"
        @filterChanged="handleFilterChanged"
        :filterList="filterList"
        :errors="errors"
        placeholder="Enter character name"
        label="Character name"
        />
        <v-row class="mt-13">
            <pagination
            @selectedPage="handleSelectedPage"
            :pages="charactersInfo.pages"/>
        </v-row>
        <v-row>
            <v-col 
            cols="3"
            v-for="character in characters"
            :key="character.id">
                <info-card
                :character="character"/>
            </v-col>
        </v-row>
    </div>
</template>


<script>
import axiosInstance from '../../api/instance'
import InfoCard from '@/components/characters/CharacterCard.vue'
import SearchInput from '@/components/ui/SearchInput.vue'
import Pagination from '@/components/ui/Pagination.vue'
export default {
    components:{
        InfoCard,
        Pagination,
        SearchInput
    },
    data: () => ({
        characters: [],
        charactersInfo: {},
        page: '',
        searchValue: '',
        filterValues: {},
        filterList: [
            {
                title: 'status',
                list: [
                    'alive', 'dead', 'unknown'
                ]
            },
            {
                title: 'gender',
                list: [
                    'female', 'male', 'genderless', 'unknown'
                ]
            }
        ],
        errors: []
    }),
    methods:{
        fetchCharacters(filterObj){
            const params = new URLSearchParams()
            for(let i in filterObj){
                params.append(i, filterObj[i])
            }
            params.append('name', this.searchValue)

            axiosInstance.get(`/character/?page=${this.page}&species=&${params.toString()}`)
            .then((response) => {
                this.charactersInfo = response.data.info
                this.characters = response.data.results
            })
            .catch((error) => {
                console.log(error)
                let errors = []
                errors.push(error.response.data)
                this.errors = [...new Set(errors)] 
            })
        },
        handleSelectedPage(page){
            this.page = page
        },
        handleSearchValue(value){
            this.searchValue = value
        },
        handleFilterChanged(groupTitle, value, searchValue){
            this.filterValues[groupTitle] = value;
            this.filterValues.name = searchValue
            this.fetchCharacters(this.filterValues);
            this.searchValue = searchValue
        }
    },
    watch:{
        page(){
            this.fetchCharacters()
        },
        searchValue(){
            this.fetchCharacters()
        },
        filterValue(){
            this.fetchCharacters()
        }
    },
    created(){
        this.fetchCharacters()
    }
}
</script>

<style lang="scss" scoped>

</style>