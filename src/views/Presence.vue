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
    <p>Por favor, selecione abaixo uma das opções correspondente com seu nome!</p>
  </div>
    <div class="family-container">
      <ul v-if="guests.length" class="family-list">
        <li
          v-for="(guest,indexGuest) in guests"
          :key="indexGuest"
          class="guest-confirm"
          @click="confirmaPresencaDoConvidado(guest)"
          :class="{ 'active' : guest.presence }"
        >
          <div class="guest-info">
            <font-awesome-icon icon="beer" class="icon-beer"/>
            <span class="name-list">{{ guest.name }}</span>
          </div>
          <button class="button-confim-presence">CONFIRMAR</button>
        </li>
    </ul>
    <div v-else class="guests-error">
      Ops! Ocorreu um erro com o seu convite, verifique o link e tente novamente.
    </div>
  </div>
</div>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBeer, faCheck } from '@fortawesome/free-solid-svg-icons'
import {firebaseCollection} from '../config/firebase'
import { notify } from "@kyvg/vue3-notification";

library.add(faBeer, faCheck)
export default {
  name: 'Confirm',
  data() {
    return {
      group: '',
      guests: [],
      allGuests: [],
      guestLinks:[],
      presenceOptions: [
        {
          key: 'NOT_CONFIRMED',
          presence: false,
          type: 'warn',
          title: null,
          text: 'PRESENÇA NÃO CONFIRMADA!'
        },
        {
          key: 'CONFIRMED',
          presence: true,
          type: 'success',
          title: 'PRESENÇA CONFIRMADA',
          text: 'Aguardamos você na nossa festa !'
        }
      ]
    }
  },
  methods: {
    async confirmaPresencaDoConvidado(guest) {
      const indexOfGuest = this.allGuests.findIndex(item => item.name === guest.name && item.group === guest.group) 
      const isConfirmedPresence = guest.presence === false
      let modifyedGuest = { ...guest }
      modifyedGuest.presence = !modifyedGuest.presence
      modifyedGuest.confirmedDate = Date.now()

      await firebaseCollection.child('-Me5xxMocDBb1UhhvQis').child(indexOfGuest).set(modifyedGuest)
      this.getFamilyGuests()

      const { title, text, type } = this.presenceOptions.find(item => item.presence === isConfirmedPresence)
      notify({ title, text, type, duration: 10000 })
    },
    getFamilyGuests() {
      firebaseCollection.child('-Me5xxMocDBb1UhhvQis').get().then((snapshot) => {
        this.allGuests = snapshot.val()
        this.guests = this.allGuests.filter(guest => guest.group === this.group)
        // this.allGuests.forEach(item => {
        //   console.log(`${item.name}: https://conviteformatura-2baf2.web.app/#home-page?${item.group}`)
        // })
      })
    }
  },
  mounted() {
    this.getFamilyGuests()
    this.group = window.location.hash.split('?')[1]
  }
}
</script>
<style lang="scss" scoped>
  .confirm-presence {
    background: center/cover url('../assets/images/woodflag.jpg');
    font-size: 33px;
    text-shadow: 2px 3px 5px black;
    min-height: 100vh;
    width: 100%;
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
      width: 100%;
      .family-list {
        list-style: none;
        width: 320px;
        margin: 0;
        padding: 0;
        width: 100%;
        max-width: 510px;
        padding-left: 20px;
        padding-right: 20px;

        .guest-confirm {
          height: 70px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          .guest-info {
            display: flex;
            align-items: center;
            .icon-beer {
              margin-right: 10px;
            }
            .name-list {
              font-size: 22px;
            }
          }
          .button-confim-presence {
            background-color: #42A85F;
            color: white;        
            height: 40px;
            border-radius: 20px;
            border: none;
            width: 108px;
            cursor: pointer;
            &:hover {
              background-color: #1f6934;
            }
          }
          &.active, &:hover {
            .guest-info {
              .icon-beer {
                color: #f7c300;
              }
            }
          }
          &:hover {
            .button-confim-presence {
              background-color: #196e31;
            }
          }
        }      
      }
      .guests-error {
        margin-top: 20px;
        color: #ffcc00;
      }
    }      
  }
</style>
