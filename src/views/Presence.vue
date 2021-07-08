<template>
<div id="confirm-presence" class="confirm-presence">
  <div class="text-title">
    <h2>Confirme sua presença</h2>
  </div>  
  <div class="banner">
    <span class="text-date">31/07/2021</span>
  </div>
  <span class="text">Sábado às 11 horas.</span>
  <div class="colls">
    <p>Por favor, selecione uma das opções correspondente com seu nome!</p>
  </div>
    <div class="family-container">
      <ul class="family-list">
        <li class="name"><font-awesome-icon icon="beer" class="icon"/>
        <input type="checkbox" name="" id="check" @click="updateguest">
       </li>
       <li class="name"><font-awesome-icon icon="beer" class="icon"/>
        <input type="checkbox" name="" id="check">
       </li>
       <li class="name"><font-awesome-icon icon="beer" class="icon"/>
        <input type="checkbox" name="" id="check">
       </li>
    </ul>
  </div>
</div>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBeer } from '@fortawesome/free-solid-svg-icons'
import {firebaseCollection} from '../config/firebase'

library.add(faBeer)
export default {
  name: 'Confirm',
  data() {
    return {
      guest: '',
      teste: '',
      presence: true
    }
  },
  methods: {
    confirmaPresencaDoConvidado(presence) {
      if (presence == false){
        firebaseCollection.ref().child('Convidados').child('-Me5xxMocDBb1UhhvQis').
        child('108').child('presence').set(this.presence)
      }
      else{
        firebaseCollection.ref().child('Convidados').child('-Me5xxMocDBb1UhhvQis').
        child('108').child('presence').set(!this.presence)
      }
    },
    updateguest(){
      firebaseCollection.ref().child('Convidados').child('-Me5xxMocDBb1UhhvQis').
      child('108').child('presence').get().then((snapshot) => {
      this.teste = snapshot.val()
      console.log(snapshot.val())
      this.confirmaPresencaDoConvidado(this.teste)
    })
    }
  },
  mounted(){
  }
}
</script>
<style lang="scss" scoped> 
.confirm-presence {
  background: no-repeat center/cover url('../assets/images/woodflag.jpg');
  font-size: 33px;
  text-shadow: 2px 3px 5px black;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding-top: 102.28px;
  .text-title {
    font-family: 'sofia';
  }
  .banner {     
    display: flex;        
    background: no-repeat center/cover url('../assets/images/ribbon.png');
    justify-content: center; 
    height: 130px;
    width: 350px;
    align-items: center;
    .text-date {   
      font-size: 30px;
      margin-top: -45px;
    }
  }
  .text {
    margin-top: 20px;
  }
  .family-container{
    display: flex;  
    justify-content: center;
    flex-wrap: wrap;
    .family-list {
      list-style: none;
      .icon {
        &:hover {
          color: yellow;
        } 
      }
      #check {
        width: 40px;
        cursor: pointer;
      }  
    }
  }      
}   
</style>
