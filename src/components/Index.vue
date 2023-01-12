<template>
    <LoadingSpinner v-if="loading" />

    <div v-else class="container-tarjetas">
        <TarjetaActividad
            v-for="a in actividades"
            :key="a.id"
            :actividad="a"
        />
    </div>

    <PaginacionCards
      @changePage="getActividades"
    />
</template>

<script>
import LoadingSpinner from './Loading.vue'
import TarjetaActividad from './TarjetaActividad.vue'
import PaginacionCards from './Paginacion.vue'

export default {
  name: 'ActividadesContainer',
  components: {
    LoadingSpinner,
    TarjetaActividad,
    PaginacionCards
  },
  data () {
    return {
        loading: true,
        actividades: []
    }
  },
  created () {
    this.getActividades()
  },
  methods: {
    getActividades (p = 1) {
        this.loading = true

        fetch(`https://www.frontchallenge.bigbox.com.ar/activity?_page=${p}&_limit=9`)
            .then(data => data.json())
            .then(r => {
                this.loading = false
                this.actividades = r
                this.actividades.forEach(a => a.activity = JSON.parse(a.activity))

                console.log(this.actividades)
            })
    }
  }
}
</script>

<style>
.container-tarjetas {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
</style>