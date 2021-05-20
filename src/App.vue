<template>
  <img src="./assets/capivara.png" alt="" srcset="">
  <Chaybs msg="tem que retornar string aq porra" numero="25" />
  <img  alt="Pegasus assustado" src="./assets/proterzeu.png">
  <Gaba msg="É HORA DO DUELO" :numero="24"/>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
import Gaba from './components/Gaba.vue'
import Chaybs from './components/Chaybs'
export default {
  name: 'App',
  components: {
    Gaba,
    Chaybs,
    HelloWorld
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
  margin-top: 60px;
}
</style>