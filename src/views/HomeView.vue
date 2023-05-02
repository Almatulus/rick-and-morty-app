<template>
  <div class="home">
    <v-row>
      <v-col class="d-flex justify-center">
        <div class="logo-wrapper">
          <v-img
          src="../assets/images/logo.svg"
          height="100%"
          width="100%"
          ></v-img>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <router-view></router-view>
          <v-toolbar
            dark
            flat 
          >
            <template v-slot:extension>
              <v-tabs
                v-model="tabs"
                centered
              >
                  <v-tab
                    v-for="i in tab"
                    :key="i.title"
                  >
                    <router-link :to="{name: i.url}">
                      {{ i.title }}
                    </router-link>
                  </v-tab>
              </v-tabs>
            </template>
          </v-toolbar>
      
          <v-tabs-items v-model="tabs">
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <router-view/>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  

  export default {
    name: 'Home',
    components: {
      
    },
    data: () => ({
      model: 'tab-2',
      tabs: null,
      tab: [
        {
          title: 'Characters',
          url: 'characters'
        },
        {
          title: 'Locations',
          url: 'locations'
        },
        {
          title: 'Episodes',
          url: 'episodes'
        }
      ]
    })
  }
</script>

<style lang="scss" scoped>
.logo-wrapper{
  width: 400px; 
  height:100px;
}
</style>
