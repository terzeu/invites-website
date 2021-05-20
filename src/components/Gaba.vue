<template>
  <div class="deverdoTerzeu">
    <input type="text" v-model = "nome">  
    <input type="text" v-model = "Letra">    
    <input type="text" v-model = "numeroDeCelular">       
    <p> Nome para testes: {{nome}}</p>
    <p> Letra para testes: {{Letra}}</p>
    <p> Numero de  para testes: {{numeroDeCelular}}</p>
    <br>
     <h1>{{ msg }}</h1>
    <p v-if="confereNumero == true"> {{sim}}</p>
    <p v-else> {{nao}} </p>
    <h2>{{ numero }}</h2>
    <br>
  </div>
</template>

<script>
export default {
  name: 'Gaba',
  created(){
    console.log(this.numero),
    console.log(this.msg),
    console.log(this.Letra),
    console.log(this.mudaFrase)
  },
  methods: {
      calculodoresto(){
       const resultadoResto = this.numero % 2
        return resultadoResto
      }
  },
  computed:{
    confereNumero() {
      const resultado = this.calculodoresto()
      if(resultado == 0)
      return true
      else
      return false
    }
    },
  data(){
    return{
      nome : "Gaba",
      numeroDeCelular : "465464654654654",
      Letra: "G",
      sim: "SIM",
      nao: "NAO",
    }
  },
  props: {
      msg: {
        type: String,
        required: true,
    },
    numero:{
        type: Number,
        required: true
    }
  },
  
}
</script>

<style scoped>
.deverdoTerzeu{
    color: red;
}

</style>