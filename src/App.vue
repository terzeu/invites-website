<template>
  <Header/>
  <Home/>
  <Location/>
  <Presence/>
</template>
<script>
import Header from './components/Header'
import Presence from './views/Presence.vue'
import Home from './views/Home.vue'
import Location from './views/Location.vue'
export default {
  name: 'App',
  components: {
    Header,
    Presence,
    Home,
    Location
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
