<template>
  <Header/>
  <Router :routes="routes"/>
</template>
<script>
import Header from './components/Header.vue'
import Router from './components/Router.vue'
import routes from './routers/index'
export default {
  name: 'App',
  components: {
    Header,
    Router
  },
  data() {
    return {
      routes
    }
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
