<template>
  <img  alt="Pegasus assustado" src="./assets/proterzeu.png">
  <Gaba msg="É HORA DO DUELO" :numero="24"/>

  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Gaba from './components/Gaba.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Gaba
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
