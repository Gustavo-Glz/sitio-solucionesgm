<template>
  <Home />
</template>

<script>
import { mapActions } from 'vuex'
export default {
  created() {
    this.getDestacados()
    this.getServicios()
  },

  methods: {
    ...mapActions(['getDestacados', 'getServicios']),
  },
}
</script>

<style>
</style>