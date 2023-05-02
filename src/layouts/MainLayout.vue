<template>
    <div class="main-layout">
        <v-card class="overflow-hidden">
        <v-app-bar
            :collapse="!collapseOnScroll"
            :collapse-on-scroll="collapseOnScroll"
            absolute
            dark
            scroll-target="#scrolling-techniques-6"
        >
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    
            <!-- <v-toolbar-title>Collapsing Bar</v-toolbar-title> -->
    
            <!-- <v-spacer></v-spacer> -->
    
            <!-- <v-checkbox
            v-model="collapseOnScroll"
            color="white"
            hide-details
            ></v-checkbox> -->
        </v-app-bar>
        <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        >
        <v-list
            nav
            dense
        >
            <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
            >
            <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>

            <v-list-item prepend-icon="mdi-account" title="Account"></v-list-item>
            </v-list-item-group>
        </v-list>
        </v-navigation-drawer>
        <v-sheet
            id="scrolling-techniques-4"
            class="overflow-y-auto"
            max-height="100%"
        >
            <v-container class="pb-4">
                <router-view/>
            </v-container>
        </v-sheet>
    </v-card>
    </div>
</template>

<script>
export default {
    data: () => ({
        collapseOnScroll: true,
        drawer: false,
        group: null,
    })
}
</script>

<style lang="scss" scoped>
.container{
    height: 100vh!important;
    padding-top: 100px;
}
</style>