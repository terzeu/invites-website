<template>
  <Header/>
  <Router/>
</template>
<script>
import Header from './components/Header.vue'
import Router from './components/Router.vue'
import pessoa from './peoples'
import firebaseConfig from './config/firebase'
import Firebase from 'firebase'
Firebase.initializeApp(firebaseConfig)
const jump = Firebase.database().ref().child('Convidados')
export default {
  name: 'App',
  components: {
    Header,
    Router
  },
  data() {
   return { pessoa } 
  },
  method: {
    add() {
      jump.push(pessoa)
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
