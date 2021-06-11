<template>
<div class="confirm-presence">
  <div class="text-title">
    <h2>confirme sua presença</h2>
  </div>  
  <div class="date">
    <span class="banner">30/07/2021</span> 
    <span class="day">quinta feira as 15 horas</span> 
  </div>    
  <div class="colls">
    <p>Por favor, Selecione uma das 3 opções abaixo:</p>
  </div>  
  <div class="button-div">
    <button class="buttons sucess">eu vou</button>
    <button class="buttons warning">talvez</button>
    <button class="buttons danger">não vou</button>
  </div>   
</div>  
</template>
<script>
export default {
  name: 'Confirm'
}
</script>
<style lang="scss" scoped> 
.confirm-presence {
  background: no-repeat center/cover url('../assets/images/woodnoflag.jpg');
  font-size: 33px;
  text-shadow: 2px 3px 5px black;
  height: 100vh;
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  .text-title {
    color: #fff;
  }
  .date {     
    display: flex;        
    flex-direction: column;
    align-content: center;
    color: #fff;
  }
  .banner { 
    background: no-repeat center/cover url('../assets/images/ribbon.png');
    display: flex;
    justify-content: center;
    line-height: 180px; 
    font-size: 30px;  
    background-size: contain;
    background-position: 1 0 0 ;
    height: 145px;
    align-items: flex-end;       
  }  
  .colls {
    color: #ffff;
  }
  .button-div {
    display: flex;    
    justify-content: center; 
    .buttons {
      display: flex;  
      text-transform: uppercase;
      align-items: center;
      border-radius: 25px;
      height: 48px;
      width: 150px;
      justify-content: center;  
      color: #ffff; 
      border-color: #ffff;    
      margin: 9px 8px;       
      cursor: pointer;
      font-family: 'arial'
    }     
    .sucess {
      background-color: #07b307;
      border: #07b307;
      &:hover {
        background: #46a049;
      }
    }    
    .warning {
      background-color: #f9ce04;
      border: #f9ce04;
      &:hover {
        background: #e68a00;
      }
    } 
    .danger {
      background-color: #e52729;
      border: #e52729;
      &:hover {
        background: #da190b;
      }
    }   
  }            
}   
</style>