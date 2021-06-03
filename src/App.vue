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
body {
  height: calc(100vh - 150px);
  margin: 0;
  background: no-repeat center/cover url('./assets/images/madeira.jpg');
}
#app {
  font-family: 'Sofia';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
