<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="3"
        v-for="({ descripcion, precio, img }, index) in productos"
        :key="index"
      >
        <v-card class="d-flex flex-column" elevation="0" height="330">
          <v-img class="mx-auto" :src="img" width="180" contain></v-img>
          <v-card-text class="text-body-2 text-justify black--text py-0"
            >{{ descripcion }}
          </v-card-text>
          <v-card-title
            class="blue--text text--darken-4 text-h6 font-weight-bold py-2"
            >{{ convertirPesos(precio) }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    productos: Array,
  },

  methods: {
    convertirPesos(precio) {
      return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
      }).format(precio)
    },
  },
}
</script>

