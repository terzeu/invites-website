<template>

  <img src="./assets/capivara.png" alt="" srcset="">
  
  <Chaybs msg="tem que retornar string aq porra" numero="25" />

  <img alt="Vue logo" src="./assets/logo.png">

  <HelloWorld msg="Welcome to Your Vue.js App"/>

</template>


<script>
import HelloWorld from './components/HelloWorld'

import Chaybs from './components/Chaybs'


export default {
  name: 'App',
  components: {
    HelloWorld,
    Chaybs
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
