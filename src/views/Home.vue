<template>
<div id="home-page" class="home-page">
  <div class="home-content">
    <h2 class="home-title">Seja bem-vindo</h2>
    <div class="welcome-description">
      <p>Venha celebrar conosco a formatura de Gustavo e Francisca junto com seu aniversário, realizada no hotel fazenda pirapitinga no dia 31/07/2021, sábado a partir das 11h da manhã! 🍺</p>
      <p>Conto com você para comemorar essa grande conquista em nossas vidas. 🥃</p>
    </div>
  </div>       
</div>
</template>
<script>
export default {
  name: 'Home'
}
</script>
<style lang="scss" scoped>
.home-page {
  color: rgb(223, 223, 223);
  font-size: 33px;
  text-shadow: 2px 3px 5px black;
  height: 100%;
  background: no-repeat center/cover url('../assets/images/mainwood.jpg');
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  .home-content {
    padding-top: 102.28px;
    .home-title {
      font-family: 'sofia';
      margin: 0 0 30px 0;     
    }
    .welcome-description {
      max-width: 600px;
      p {
        margin: 0;
      }
    }
  }
}   
</style>
