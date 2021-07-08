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
        <li
          v-for="(guest,indexGuest) in guests"
          :key="indexGuest"
          class="name notify"
          @click="confirmaPresencaDoConvidado(guest)"
        >
          <font-awesome-icon icon="beer" class="icon"/>
          <span>{{ guest.name }}</span>
          <button><font-awesome-icon icon="check" class="icon"/></button>
        </li>
    </ul>
  </div>
</div>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBeer, faCheck } from '@fortawesome/free-solid-svg-icons'
import {firebaseCollection} from '../config/firebase'
import { notify } from "@kyvg/vue3-notification";

notify({title: "Vue 3 notification 🎉",});
library.add(faBeer, faCheck)

export default {
  name: 'Confirm',
  data() {
    return {
      presence: true,
      group: 'RmFtaWxpYTY=',
      guests: [],
      allGuests: []
    }
  },
  methods: {
    confirmaPresencaDoConvidado(guest) {
      const indexOfGuest = this.allGuests.findIndex(item => item.name === guest.name && item.group === guest.group) 

      firebaseCollection.child('-Me5xxMocDBb1UhhvQis').child(indexOfGuest)
        .child('presence').get().then((snapshot) => {
          this.presence = snapshot.val()
          firebaseCollection.child('-Me5xxMocDBb1UhhvQis').child(indexOfGuest)
            .child('presence').set(!this.presence)
      })
    },
    getFamilyGuests() {
      firebaseCollection.child('-Me5xxMocDBb1UhhvQis').get().then((snapshot) => {
        this.allGuests = snapshot.val()
        this.guests = this.allGuests.filter(guest => guest.group === this.group)
        console.log(this.guests)
      })
    }
  },
  mounted() {
    this.getFamilyGuests()
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
        .notify{
          color: blue;
        }
      }  
    }
  }      
}   
</style>
