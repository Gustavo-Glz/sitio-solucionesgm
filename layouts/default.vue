<template>
  <v-app>
    <Header />
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  },
}
</script>


<style lang="scss">
.v-toolbar__content, 
.v-toolbar__extension {
  padding: 0px;
}

.container {
  max-width: 1200px;
}

iframe {
  position: relative;
  width: 100%;
  height:450px;
}


</style>