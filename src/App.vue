<template>
  <Header/>
  <Router/>
</template>
<script>
import Header from './components/Header.vue'
import Router from './components/Router.vue'
import pessoa from './peoples'
import Firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyAbDDYhpS3DOteVl7sYiPnRSR3dpqcPCB4",
    authDomain: "conviteformatura-2baf2.firebaseapp.com",
    databaseURL: "https://conviteformatura-2baf2-default-rtdb.firebaseio.com",
    projectId: "conviteformatura-2baf2",
    storageBucket: "conviteformatura-2baf2.appspot.com",
    messagingSenderId: "826582283350",
    appId: "1:826582283350:web:22c47603c551d6590e77f7"
}
Firebase.initializeApp(firebaseConfig)
const every = Firebase.database().ref().child('Convidados')

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
      every.push(pessoa)
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
