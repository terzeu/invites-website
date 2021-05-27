<template>

  <cabeca/>
</template>
<script>
import Cabeca from './components/Cabeca.vue'
export default {
  name: 'App',

  components: {
    Cabeca
  
  }
}
</script>
<style lang="scss"> 
@import "./assets/app.scss";
#app {
  font-family: 'Sofia';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
