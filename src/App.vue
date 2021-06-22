<template>
  <Header/>
  <Router/>
</template>
<script>
import Header from './components/Header'
import Router from'./components/Router'
export default {
  name: 'App',
  components: {
    Header,
    Router
  },
  props: {
    Router
  }
}
</script>
<style lang="scss">
body {
  height: 100%;
  margin: 0;
}
#app {
  font-family: 'Gotham Rounded Book';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
