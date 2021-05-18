<template>
  <div class="deverdoTerzeu">
    <h1>{{ msg }}</h1>
    <h2>{{ numero }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Gaba',
  created(){
    console.log(this.numero)
  },
  props: {
      msg: {
        type: String,
        required: true
    },
    numero:{
        type: Number,
        required: true
    }
  }
}
</script>

<style scoped>
.deverdoTerzeu{
    color: red;
}

</style>