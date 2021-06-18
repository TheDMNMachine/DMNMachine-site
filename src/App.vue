<template>
  <div id="nav">
    <router-link to="/">Strona Główna </router-link> |
    <router-link to="/about">O mnie</router-link>
    <router-link to="/projects">Projekty</router-link>
    <router-link to="/contact">Konakt</router-link>
  </div>
  <router-view/>

</template>

<script>
import Home from "./views/Home";

export default {
  components:{ Home },
  setup(){
    document.title = 'Strona Damiana Jarominka'
  }
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
