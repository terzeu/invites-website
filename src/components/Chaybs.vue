<template>
  <div class="hello">
    <h1 v-if="tipoanu">{{anuncio}}</h1>
    <hr>
    <h2>{{nomeDasCapiva}}</h2>
    <p>{{descricao}}</p>
    <p @click="aumentaIdadeDaJessica">{{`esta capivara tem ${idade} Anos`}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      anuncio:'capivaras em breve de background',
    }
  },
  props: {
    nomeDasCapiva: String,
    descricao: String,
    idade: Number,
    cliente: Object,
    tipoanu: Boolean
  },
  methods: {
    alertProTerzeu: () => {
      window.alert('me desculpe pela merda lineu :(.')
    },
    aumentaIdadeDaJessica() {
      this.$emit('aumentaIdadeDaJessica')
    }
  },
  watch: {
    idade(novoValor) {
      if (novoValor === 15) {
        console.log('vc é uma mocinha')
      }
    }
  }
}
</script>
<style scoped>
h1{
  background-color: aqua;
  border-style: dotted;
  border-width: thick;
  border-color: green;
}
h2 {
  background-color: pink;
  margin: 40px 0 0;
  padding: 100px;
}
#props{
  color: #42b983;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
