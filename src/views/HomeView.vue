<template>
  <div class="home">
    <v-row>
      <v-col>
        <v-card
        class="pt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus asperiores deserunt ullam nemo. Ex magnam, minima, pariatur quaerat facere fugiat adipisci corporis esse eligendi accusamus aliquam, eum molestiae sunt nihil?
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
