<template>
<header class="header-component">
    <nav class="header-nav">            
      <font-awesome-icon icon="align-justify" class="icon" @click="toggleHeaderMenu" /> 
      <ul v-show="isOpenHeaderMenu" :class="{ 'open': isOpenHeaderMenu }" class="header-ul">
        <p class="header-title">Formatura</p>
        <li><a href="#home-page" class="header-link">inicio</a></li>
        <li><a href="#location-start" class="header-link">local</a></li>
        <li><a href="#confirm-presence" class="header-link">confirmar presença</a></li>
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
        isOpenHeaderMenu: false
      }
    },
    methods: {
      toggleHeaderMenu() {
        this.isOpenHeaderMenu = !this.isOpenHeaderMenu
      } 
    }
  }
</script>
<style lang="scss" scoped>
.header-component {
  position: fixed;
  width: 100%;
  background: rgba(255, 192, 203, 0.884);  
  font-size: 25px;
  .header-nav {
    display: flex;
    padding: 0 20px;
    justify-content: center; 
    .header-title {
      display: flex;
      justify-content: initial;
      padding: 0 20px;
      margin-right: 150px;
    }    
    .icon {
      background-color: transparent;
      border: none;
      color: #FFF;
      font-size: 33px;
      position: absolute;
      right: 10px;
      top: 10px;
      margin-top: 15px;
      display: none;
      cursor: pointer;   
    }
    .header-ul {
      list-style: none;
      display: flex;
      align-items: center;
      margin: 0;
      padding: 0 20px;
      overflow: hidden;
      transition: all .5s;
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
    @media (max-width: 750px) {
      .header-nav {   
        display: flex; 
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
      }  
      .header-title {
            justify-content: center;
            margin: 0;
      }       
      .header-ul {    
        margin: auto;
        justify-content: center;
        flex-direction: column;      
        &.open {
          height: 230px;

        }
      }
      .icon {
        display: block;
      }
    }  
    /*@media (max-width: 600px) {
      p {
        width: 10px;  
         
      }
      button {  
            
      }
      /*.header-nav {
        display: flex;
        padding: 0;
        align-items: flex-start;
        justify-content: center;
      }*/
      /*.header-ul {
        flex-direction: column;
        display: flex;
        margin: 0;
        width: 100%;
        height: 0;
        justify-content: center;
        align-content: center;
        align-items: center;
        
      }    
      button {
        display: block;
      }
    }*/
  }       
}
</style>
