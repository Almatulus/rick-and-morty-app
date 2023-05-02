<template>
  <v-app>
    <v-main>
      <component :is="layout">

      </component>
    </v-main>
  </v-app>
</template>

<script>
import HelloLayout from '@/layouts/HelloLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'
export default {
  name: 'App',

  computed: {
    layout(){
      return (this.$route.meta.layout || 'hello') + '-layout'
    }
  },
  components: {
      HelloLayout,
      MainLayout
    }
};
</script>

<style lang="scss" scoped>
.v-main{
  overflow: hidden;
}
</style>
