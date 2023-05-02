<template>
    <div class="hello">
        <v-card class="d-flex flex-column align-center" 
        dark
        outlined> 
            <v-card-title class="text-center">
                Hello! My Name is Almat, and this is my Rick And Morty encyclopedia!
            </v-card-title>
            <v-card-actions>
                <router-link to="/home">
                    <v-btn
                    outlined
                    text
                    class="pa-6 mt-5"
                    >
                        Let's go! 
                    </v-btn>
                </router-link>
        </v-card-actions>
        </v-card>
    </div>
</template>


<style lang="scss" scoped>
.v-card{
    padding: 30px;
    &__title{
        font-size: 25px;
    }
}

.v-card__title{
    line-height: 1.5!important;
}
</style>