<template>
<div id="confirm-presence" class="confirm-presence">
  <div class="text-title">
    <h2>Confirme sua presença</h2>
  </div>  
  <div class="banner">
    <span class="text-date">30/07/2021</span>
  </div>
  <span class="text">Quinta-feira às 15 horas</span>     
  <div class="colls">
    <p>Por favor, selecione uma das 3 opções abaixo:</p>
  </div>  
  <div class="button-div">
    <button class="buttons success">eu vou</button>
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
  background: no-repeat center/cover url('../assets/images/woodflag.jpg');
  font-size: 33px;
  text-shadow: 2px 3px 5px black;
  height: 100%;
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  color: #fff;
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
  .button-div {
    display: flex;    
    justify-content: center;
    flex-wrap: wrap;
    .buttons {
      &.success {
        background-color: #07b307;
        border: #07b307;
      &:hover {
        background: #46a049;
      }
    } 
      &.warning {
        background-color: #f9ce04;
        border: #f9ce04;
      &:hover {
        background: #e68a00;
      }
    } 
      &.danger {
        background-color: #e52729;
        border: #e52729;
      &:hover {
        background: #da190b;
      }
    }  
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
  }            
}   
</style>
