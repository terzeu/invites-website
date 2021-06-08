<template>
<div class="confirm-presence">
  <div class="text-title">
    <h2>confirme sua presença</h2>
      <div class="date">
        <span class="banner">30/07/2021</span><br>
        <span>Quinta-feira a partir de 11:00</span>
      </div>
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
  background: no-repeat center/cover url('../assets/images/madeira2.jpg');
  font-size: 33px;
  text-shadow: 2px 3px 5px black;
  height: 100vh;
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  .text-title {
    color: #fff;
    margin-top: -400px;
     .date {
       margin: 30px; 
       display: flex;    
      .banner { 
       background: no-repeat center/cover url('../assets/images/ribbon.png');
       
      }
    }    
  }
}

</style>