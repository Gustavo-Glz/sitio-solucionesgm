<template>
  <v-footer color="grey darken-1" padless dark height="300">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <div class="text-h6 text-center">Soluciones Tecnológicas GM</div>
          <div class="text-body-2 text-center">
            Empresa con amplia experiencia en venta de equipo de cómputo,
            soporte y asesoría.
          </div>
        </v-col>
        <v-col sm="6" md="4">
          <div class="d-flex justify-center">
            <v-btn text to="/">Inicio</v-btn>
            <v-btn text to="/productos">Productos</v-btn>
            <v-btn text to="/contacto">Contacto</v-btn>
          </div>
        </v-col>
        <v-col sm="6" md="4">
          <div class="text-body-2 text-center">
            5 Sur #521 A Col. Nicolas Bravo Tehuacán, Puebla.
          </div>
          <div class="text-body-2 text-center">Tel: 2381038825</div>
          <div class="text-body-2 text-center">
            Correo: solucionesgm82@gmail.com
          </div>
        </v-col>
        <v-col class="text-center" cols="12">
          {{new Date().getFullYear() }} —
          <strong>&copy;Soluciones Tecnológicas GM</strong>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {}
</script>

<style>
</style>