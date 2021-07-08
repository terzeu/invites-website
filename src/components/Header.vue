<template>
  <header :class="{ 'mobile' : mobile}" class="header-component">
    <nav class="header-nav"> 
      <h5>Formatura</h5>             
      <font-awesome-icon icon="align-justify" class="icon" v-show="mobile" @click="toggleHeaderMenu" /> 
      <ul v-show="isOpenHeaderMenu" :class="{ 'open': isOpenHeaderMenu }" class="header-ul">
        <li><a @click="toggleHeaderMenu" href="#home-page" class="header-link">inicio</a></li>
        <li><a @click="toggleHeaderMenu" href="#location-start" class="header-link">local</a></li>
        <li><a @click="toggleHeaderMenu" href="#confirm-presence" class="header-link">confirmar presença</a></li>
        <li><a @click="toggleHeaderMenu" href="#obs-start" class="header-link">Observações</a></li>
      </ul>
    </nav>
  </header>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'
library.add(faAlignJustify)
export default {
  name: 'Header',   
  data() {  
    return {
      mobile: false,
      isOpenHeaderMenu: true,
    }
  },
  created() {
    window.addEventListener('resize' , this.checkScreen)
    this.checkScreen()
  },
  methods: {
    toggleHeaderMenu() {
      if (this.mobile) {
        this.isOpenHeaderMenu = !this.isOpenHeaderMenu
      }
    },
    checkScreen() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 750) {
        this.mobile = true
      } else {
        this.mobile = false
        this.isOpenHeaderMenu = true
      }     
    }
  }
}
</script>
<style lang="scss" scoped>
.header-component {
  font-family: 'sofia';
  position: fixed;
  width: 100%;
  background: rgba(255, 192, 203, 0.884);  
  font-size: 25px;
  transition: all 0.5s;
  .header-nav {
    display: flex;
    justify-content: space-around;  
    .header-ul {
      list-style: none;
      display: flex;
      align-items: center;
      margin: 0;
      padding: 0 20px;
      overflow: hidden;
      .header-link {
        margin: 0 30px;
        color: #2c3e50;
        text-decoration: none;
        &:hover {
          color: blue;
        }
        &:active {
          color: red;
        }
      }  
    }
  }       
}
.mobile {
&.header-component {
  .header-nav {   
    display: flex;
    flex-direction: column;     
  } 
  .icon {
    background-color: transparent;
    border: none;
    color: #FFF;
    font-size: 33px;
    position: absolute;
    right: 10px;
    top: 20px;
    margin-top: 15px;
    display: block;
    cursor: pointer;   
  }       
  .header-ul {    
    text-align: center;
    flex-direction: column;      
    &.open {
      height: 170px;
    }
  }
}
}
</style>



