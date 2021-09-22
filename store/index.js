import { db } from '@/plugins/firebase'
export const strict = false
export const state = () => ({
  productosDestacados: [],
  productos: [],
  servicios: [],
  detallesProducto: [],
  porPagina: 12,
  paginas: 0,
  pagina: 1,
  total: 0,
  categoria: '',
})

export const mutations = {
  setDestacados(state, payload) {
    state.productosDestacados = payload
  },

  setProductos(state, payload) {
    state.productos = payload
  },

  setServicios(state, payload) {
    state.servicios = payload
  },
  setPagina(state, payload) {
    state.pagina = payload
  },
  setDetallesProducto(state, payload) {
    state.detallesProducto = payload
  },
}

export const actions = {
  async getDestacados({ commit }) {
    const res = await db.collection('productos').limit(4).get()
    const destacados = []
    res.forEach((doc) => {
      let producto = doc.data()
      producto.id = doc.id
      destacados.push(producto)
    })
    return commit('setDestacados', destacados)
  },

  async getServicios({ commit }) {
    const res = await db.collection('servicios').get()
    const servicios = []
    res.forEach((doc) => {
      let servicio = doc.data()
      servicio.id = doc.id
      servicios.push(servicio)
    })
    return commit('setServicios', servicios)
  },

  async getProductos({ commit, state }) {
    state.categoria = ''
    db.collection('productos')
      .get()
      .then((res) => {
        state.total = res.size
        state.paginas = Math.ceil(state.total / state.porPagina)
      })
    const res = await db
      .collection('productos')
      .orderBy('idProducto')
      .limit(state.porPagina)
      .get()
    const productos = []
    res.forEach((doc) => {
      let producto = doc.data()
      producto.id = doc.id
      productos.push(producto)
    })
    return commit('setProductos', productos)
  },

  async getSiguiente({ commit, state }) {
    if (state.categoria == '') {
      const res = await db
        .collection('productos')
        .orderBy('idProducto')
        .limit(state.porPagina)
        .startAfter(state.porPagina * (state.pagina - 1))
        .get()
      const productos = []
      res.forEach((doc) => {
        let producto = doc.data()
        producto.id = doc.id
        productos.push(producto)
      })
      return commit('setProductos', productos)
    } else {
      const res = await db
        .collection('productos')
        .orderBy('idProducto')
        .where('categoria', '==', state.categoria)
        .limit(state.porPagina)
        .startAfter(state.porPagina * (state.pagina - 1))
        .get()
      const productos = []
      res.forEach((doc) => {
        let producto = doc.data()
        producto.id = doc.id
        productos.push(producto)
      })
      return commit('setProductos', productos)
    }
  },

  async getCategoria({ commit, state }, categoria) {
    state.categoria = categoria
    db.collection('productos')
      .where('categoria', '==', categoria)
      .get()
      .then((res) => {
        state.total = res.size
        state.paginas = Math.ceil(state.total / state.porPagina)
      })
    const res = await db
      .collection('productos')
      .orderBy('idProducto')
      .limit(state.porPagina)
      .where('categoria', '==', categoria)
      .get()
    const productosFiltrados = []
    res.forEach((doc) => {
      let producto = doc.data()
      producto.id = doc.id
      productosFiltrados.push(producto)
    })
    return commit('setProductos', productosFiltrados)
  },

  async getDetallesProducto({ commit }, id) {
    const res = await db
      .collection('productos')
      .where('idProducto', '==', id)
      .get()
      const detalles = []
      res.forEach((doc) => {
        let detalle = doc.data()
        detalle.id = doc.id
        detalles.push(detalle)
      })
      return commit('setDetallesProducto', detalles)
  },
}

export const getters = {
  getPagina(state) {
    return state.pagina
  },
}
