<template>
    <div class="main-layout">
        <v-card>
            <v-app-bar
            app
            flat
            >
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
                <v-app-bar-title
                class="text-no-wrap">
                    Rick And Morty
                </v-app-bar-title>
                <v-spacer></v-spacer>
                <v-checkbox 
                v-model="$vuetify.theme.dark"
                color="white"
                class="mt-5"
                off-icon="mdi-theme-light-dark"
                on-icon="mdi-theme-light-dark"
                ></v-checkbox>
            </v-app-bar>
            <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary>
                <v-list
                nav
                dense>
                    <v-list-item-group
                        v-model="drawer"
                    >
                        <router-link
                        v-for="link in links"
                        :key="link.url"
                        :to="link.url"
                        >
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon>{{link.icon}}</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>
                                    {{link.title}}
                                </v-list-item-title>
                            </v-list-item>
                        </router-link>
            
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
            <v-container >
                <v-row >
                    <v-col class="d-flex justify-center">
                        <div class="logo-wrapper mb-10">
                            <v-img
                            src="../assets/images/logo.svg"
                            height="100%"
                            width="100%"
                            ></v-img>
                        </div>
                    </v-col>
                </v-row>
                <router-view/>
            </v-container>
    </v-card>
    </div>
</template>

<script>
export default {
    data: () => ({
        links: [
            {
                icon: 'mdi-account-group-outline',
                title: 'Characters',
                url: '/characters'
            },
            {
                icon: 'mdi-map-marker-multiple',
                title: 'Locations',
                url: '/locations'
            },
            {
                icon: 'mdi-television',
                title: 'Episodes',
                url: '/episodes'
            },
        ],
        drawer: false,
        group: null
    })
}
</script>

<style lang="scss" scoped>
.container{
    padding-top: 55px;
}
a{
    color: #fff!important;
}
.v-app-bar-title__content{
  width: 200px!important;
}
.v-app-bar-title__placeholder{
    visibility: visible!important;
}
</style>