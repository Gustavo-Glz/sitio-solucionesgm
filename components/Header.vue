<template>
  <v-app-bar app color="#26a96c" dark height="100">
    <v-container fluid>
      <v-toolbar color="#26a96c" flat>
        <div class="d-flex aling-center">
          <a href="/">
            <v-img
              src="/logo.svg"
              contain
              width="180"
              transition="scale-transition"
            >
            </v-img>
          </a>
        </div>
        <v-spacer></v-spacer>
        <div class="hidden-xs-only">
          <v-btn text to="/">Inicio</v-btn>
          <v-btn text to="/productos">Productos</v-btn>
          <v-btn text to="/contacto">Contacto</v-btn>
        </div>
        <v-menu offset-y transition="fade-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              x-large
              dark
              icon
              v-bind="attrs"
              v-on="on"
              class="hidden-sm-and-up"
            >
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list class="text-uppercase">
            <v-list-item to="/">Inicio</v-list-item>
            <v-list-item to="/productos">Productos</v-list-item>
            <v-list-item to="/contacto">Contacto</v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
}
</script>

