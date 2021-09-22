<template>
  <v-container fluid>
    <div
      v-for="({ descripcion, detalles, compatibilidad, precio, categoria, img }, index) in detallesProducto"
      :key="index"
    >
      <v-chip label class="ma-2" color="primary">
        <div class="text-h5 pa-2">{{ categoria }}</div>
      </v-chip>
      <v-row class="d-flex align-center justify-space-between my-10">
        <v-col cols="12" md="4">
          <v-img :src="img" width="300" contain></v-img>
        </v-col>
        <v-col cols="12" md="8">
          <div class="text-h5 text-justify mb-5 font-weight-bold">{{ descripcion }}</div>
          <div class="text-subtitle-1 mb-5 text-justify">{{ detalles }}</div>
          <div class="text-subtitle-2 mb-5 text-justify">{{ compatibilidad }}</div>
          <div class="text-h4 blue--text text--darken-4 font-weight-bold">
            {{ convertirPesos(precio) }}
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    detallesProducto: Array,
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

<style>
</style>