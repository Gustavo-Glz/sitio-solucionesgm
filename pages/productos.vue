<template>
  <BaseProductos/>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  created() {
    this.getProductos();
  },

  methods: {
    ...mapActions(['getProductos'])
  }
}
</script>

<style>

</style>