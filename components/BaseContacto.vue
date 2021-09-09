<template>
  <v-container fluid>
    <div class="text-h4 text-center my-10">Contáctanos</div>
    <v-row>
      <!-- <v-col class="pa-0" cols="12" md="4">
        <v-card class="pa-4  mr-7" elevation="6" rounded="lg" height="450">
          <div class="text-h6 text-center">¿Cómo podemos ayudarte?</div>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :counter="20"
              :rules="nameRules"
              label="Nombre"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Correo"
              required
            ></v-text-field>

            <v-textarea
              v-model="message"
              label="Mensaje"
              :rules="messageRules"
              solo
              height="180"
            >
            </v-textarea>

            <v-btn
              :disabled="!valid"
              color="primary"
              class="mr-4"
              @click="validate"
            >
              Enviar
            </v-btn>
          </v-form>
        </v-card>
      </v-col> -->
      <v-col class="pa-0 my-5" cols="12" md="4">
        <div class="text-h6">Información de contacto</div>
        <div class="py-2 d-flex flex-column" elevation="0">
          <div class="d-flex py-2">
            <v-icon color="red darken-2">mdi-map-marker</v-icon>
            <span>5 Sur #521-A Col. Nicolas Bravo Tehuacan, Puebla</span>
          </div>
          <div class="py-2">
            <v-icon color="light-blue accent-4">mdi-phone</v-icon>
            <span>(238) 380 90 79</span>
          </div>
          <div class="py-2">
            <v-icon color="yellow darken-3">mdi-email</v-icon>
            <span>solucionesgm82@gmail.com</span>
          </div>
          <div class="py-2">
            <v-icon color="green accent-4">mdi-whatsapp</v-icon>
            <span>(238) 108 81 43</span>
          </div>
        </div>
        <div class="text-h6 py-2">Horario de atención</div>
        <div class="text-subtitle-1">Lunes a Sábado</div>
        <div class="text-body-2">10:00 AM a 8:30 PM</div>
      </v-col>
      <v-col class="px-0" cols="12" md="8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1892.2853168950226!2d-97.39088423913918!3d18.457794093173472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c5bcdbd8b2dd27%3A0xd49c31221f0e4cf!2sCalle%205%20Sur%20521%2C%20Nicol%C3%A1s%20Bravo%2C%2075790%20Tehuac%C3%A1n%2C%20Pue.!5e0!3m2!1ses-419!2smx!4v1629504903086!5m2!1ses-419!2smx"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'Agrega un nombre',
      (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'Agrega un correo',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],

    message: '',
    messageRules: [(v) => !!v || 'Cual es tu mensaje'],
  }),

  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
}
</script>

<style>
</style>