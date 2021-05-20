<template>
  <Chaybs
    nomeDasCapiva="capivilda"
    descricao="BRABONAAAA"
    :idade="idadeDaJessica"
    :tipoanu="true"
    @aumentaIdadeDaJessica="aumentaIdadeDaJessica"
  />
  <img src="./assets/capivara.png" alt="" srcset="">
  <Chaybs nomeDasCapiva="juranilda" descricao="DOCIL E CALMA" :idade="15" :tipoanu="false"/>
  <Gaba msg="É HORA DO DUELO?" :numero="27"/>
</template>
<script>
import Gaba from './components/Gaba.vue'
import Chaybs from './components/Chaybs'
export default {
  name: 'App',
  components: {
    Gaba,
    Chaybs
  },
  data() {
    return {
      idadeDaJessica: 0
    }
  },
  methods: {
    aumentaIdadeDaJessica() {
      this.idadeDaJessica++
    }
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
