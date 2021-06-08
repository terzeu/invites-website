<template>
  <Header/>
</template>
<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
<style lang="scss"> 
@import "./assets/app.scss";
body {
  height: 100vh;
  margin: 0;
  background: no-repeat center/cover url('./assets/images/madeira.jpg');
}
#app {
  font-family: 'Sofia';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
