<template>
  <Header/>
  <Home/>
  <Location/>
  <Confirm/>
</template>
<script>
import Header from './components/Header'
import Confirm from './views/Confirm.vue'
import Home from './views/Home.vue'
import Location from './views/Location.vue'
export default {
  name: 'App',
  components: {
    Header,
    Confirm,
    Home,
    Location
  }
}
</script>
<style lang="scss"> 
@import "./assets/app.scss";
body {
  height: 100%;
  margin: 0;
}
#app {
  font-family: 'Sofia';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
