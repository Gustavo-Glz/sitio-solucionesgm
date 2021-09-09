<template>
  <v-container class="mt-10" fluid>
    <v-row>
      <!-- <v-col class="hidden-sm-and-down pa-0">
        <v-card rounded="lg">
          <v-list rounded>
            <v-subheader class="text-h6 px-1">Categorías</v-subheader>
            <v-list-item-group v-model="activo" color="primary">
              <v-list-item
                v-for="(categoria, index) in categorias"
                :key="index"
              >
                <v-list-item-title>{{ categoria }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col> -->
      <v-col cols="12">
        <div class="d-flex align-center">
          <v-btn icon @click.stop="drawer = !drawer"><v-icon large>mdi-format-list-bulleted</v-icon></v-btn>
          <v-navigation-drawer v-model="drawer" absolute temporary app>
            <v-list nav class="pa-0">
              <v-list-item-group v-model="group">
                <div class="text-h6 white--text px-2 py-4 grey darken-2">Categorías</div>
                <v-list-item v-for="(categoria, index) in categorias" :key="index">
                  <v-list-item-title class="text-subtitle-1 grey--text text--darken-2 px-2">{{ categoria }}</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
          <span class="text-h6 px-2">Productos</span>
        </div>
        <v-divider></v-divider>
        <CardProducto :productos="productos" />
        <div class="text-center">
          <v-pagination
            v-model="getPagina"
            :length="paginas"
            @input="getSiguiente"
            circle
          ></v-pagination>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      drawer: false,
      group: null,
      categorias: [
        'Accesorios',
        'Almacenamiento',
        'Audio',
        'Computadoras',
        'Monitores',
        'Componentes',
        'Impresoras',
        'Consumibles',
        'Redes',
        'Energía',
      ],
    }
  },

  watch: {
    group() {
      this.drawer = false
    }
  },

  methods: {
    ...mapActions(['getSiguiente']),
  },

  computed: {
    ...mapState(['productos', 'paginas']),
    getPagina: {
      get() {
        return this.$store.getters.getPagina
      },
      set(newPage) {
        this.$store.commit('setPagina', newPage)
      },
    },
  },
}
</script>

<style>
</style>