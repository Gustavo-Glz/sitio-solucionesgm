<template>
<ProductoDetalles :detallesProducto="detallesProducto"/>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      id: 0
    }
  },
  created() {
    this.id = parseInt(this.$route.params.id)
    this.getDetallesProducto(this.id)
  },

  methods: {
    ...mapActions(['getDetallesProducto']),
  },

  computed: {
    ...mapState(['detallesProducto'])
  }
}
</script>

<style>
</style>