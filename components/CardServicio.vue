<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="3"
        v-for="({ titulo, descripcion, img }, index) in servicios"
        :key="index"
      >
        <v-card class="pt-4" elevation="0" height="350">
          <v-img class="ma-auto" :src="img" contain width="130"></v-img>
          <v-card-subtitle class="blue--text text--darken-4 text-h6 text-center">
            {{ titulo }}
          </v-card-subtitle>
          <v-card-text
            class="text-body-2 text-justify black--text">
            {{ descripcion }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    servicios: Array,
  },
}
</script>