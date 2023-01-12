<template>
  <div class="container">
    <ActividadesContainer />
  </div>
</template>

<script>
import ActividadesContainer from './components/Index.vue'

export default {
  name: 'App',
  components: {
    ActividadesContainer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
</style>
