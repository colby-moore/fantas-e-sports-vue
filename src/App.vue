<template>
  <div id="app">
    <navbar />
    <landing />
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
import landing from './components/landing.vue'

export default {
  name: 'app',
  components: {
    navbar,
    landing
  },
  created(){
  
  }
}

</script>

<style>

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
