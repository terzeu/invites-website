<template>
  <Chaybs nomeDasCapiva="capivilda" descricao="BRABONAAAA" idade="10" :tipoanu="true"/>
  <img  alt="capivaras" src="./assets/capivara.png">
  <Chaybs nomeDasCapiva="juranilda" descricao="DOCIL E CALMA" idade="15" :tipoanu="false"/>
  <img  alt="capivaras" src="./assets/capivara.png">
  <Gaba msg="É HORA DO DUELO" :numero="24"/>
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
