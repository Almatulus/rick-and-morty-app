<template>
    <v-row>
        <v-col cols="12">
            <v-text-field
            outlined
            clearable
            :clear-icon-cb="onClearClicked()"
            v-model="searchValue"
            prepend-inner-icon="mdi-magnify"
            :append-icon="marker ? 'mdi-filter-variant-plus' : 'mdi-filter-variant-minus'"
            @click:append="toggle()"
            :class="{active: marker}"
            :placeholder="placeholder"
            :label="label"
            >
                <template v-slot:append-outer>
                    <v-icon 
                    :disabled="isEmpty"
                    @click.prevent="searchByValue(searchValue)">
                        mdi-send
                    </v-icon>
                </template>
            </v-text-field>
            <template 
            v-for="error in localErrors">
                <p :key="error" class="invalid-feedback">
                    {{error}}
                </p>
            </template>
        </v-col>
        <v-col 
        cols="12 d-flex justify-center"
        v-if="!marker">
            <v-card
            elevation="1"
            outlined
            class="pt-10 pr-10 pl-10 pb-10 filter-card">
                <v-row>
                    <v-col cols="12">
                        <v-radio-group
                        v-for="group in filterList"
                        :key="group.title"
                        v-model="selectedFilters[group.title]">
                            <v-row>
                                <p>
                                    {{group.title}}
                                </p>
                            </v-row>
                            <v-row>
                                <v-col
                                cols="3"
                                v-for="item in group.list"
                                :key="item">
                                    <v-row class="align-center">
                                        <v-radio
                                        class="hide-radio"
                                        :label="item"
                                        :value="item"
                                        @change="filterChange(group.title, item)"
                                        :class="{'active-filter': isSelected(group.title, item)}"></v-radio>
                                        <v-icon
                                        class="radio-reset"
                                        v-if="isSelected(group.title, item)"
                                        @click.prevent="resetFilters(group.title, item)"
                                        >
                                            mdi-close
                                        </v-icon>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-radio-group>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props:{
        filterList: {
            type: Array
        },
        errors: {
            type: Array
        },
        label: {
            type: String
        },
        placeholder: {
            type: String
        }
    },
    data: () => ({
        searchValue: '',
        marker: true,
        radioGroup: '',
        localErrors: [],
        isEmpty: true,
        selectedFilters: {}
    }),
    methods:{
        toggle(){
            this.marker = !this.marker
        },
        searchByValue(value){
            this.$emit('searchByValue', value)
        },
        onClearClicked(){
            this.searchByValue('')
        },
        filterChange(groupTitle, value) {
            this.$emit('filterChanged', groupTitle, value, this.searchValue);
        },
        resetFilters(groupTitle, value){
            value = ''
            this.selectedFilters[groupTitle] = ''
            this.searchValue = ''
            this.$emit('filterChanged', groupTitle, value, this.searchValue);
        },
        isSelected(groupTitle, item){
            return this.selectedFilters[groupTitle] === item
        }   
    },
    watch: {
        searchValue(){
            if(!this.searchValue){
                this.localErrors = ''
                return this.isEmpty = true
            } else{
                return this.isEmpty = false
            }
        },
        errors(newErrors) {
            const newLocalErrors = newErrors.map(item => item.error);
            if (JSON.stringify(newLocalErrors) !== JSON.stringify(this.localErrors)) {
                this.localErrors = newLocalErrors;
            }
        }
    },
    computed: {
        filterObj() {
            const query = this.searchValue.toLowerCase().trim();
            return {
                name: query,
                species: query
            };
        }
    },
}
</script>

<style lang="scss" scoped>
.v-text-field--outlined > .v-input__control > .v-input__slot{
    border-top-right-radius: 0px!important;
    border-bottom-right-radius: 0px!important;
}

.v-btn:not(.v-btn--round).v-size--x-large{
    height: 56px;
}

.col-right{
    margin-left: -24px;
}

.filter-card{
    width: 70%;
}

.v-input{

}

.active{
    color: #2196f3;
}

.v-input--selection-controls__input{
    display: none!important;
}

.v-input--radio-group--column .v-radio:not(:last-child):not(:only-child){
    margin-bottom: 0;
}

.radio-reset{
    cursor: pointer;
    margin-left: 5px;
    &:hover{
        color: #2196f3;
    }
}

.active-filter{
    background: #2196f3;
    padding: 5px;
    margin-top: -5px;
    border-radius: 10px;
    display: block;
    .v-label{
        color: #000 !important;
    }
}
</style>
