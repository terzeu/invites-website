<template>
  <notifications />
  <Header/>
  <Router/>
</template>
<script>
import Header from './components/Header.vue'
import Router from './components/Router.vue'
import guests from './config/peoples'
import { firebaseCollection } from './config/firebase'

export default {
  name: 'App',
  components: {
    Header,
    Router
  },
  data() {
   return { guests } 
  },
  methods: {
    add() {
      firebaseCollection.push(guests)
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
.vue-notification-wrapper {
  .vue-notification {
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .notification-title {
      font-size: 18px;
    }
    .notification-content {
      font-size: 15px;
    }
  }
}
</style>
