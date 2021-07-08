<template>
  <div id="obs-start" class="obs-start">
    <div class="observation-title">
      <h2 class="home-title">Observações</h2>
      <div class="description">
        <p>Não esqueça de levar sua mascara. A pandemia ainda não  acabou, estaremos disponibilizando alcool em gel a todos!</p>
      </div>    
    </div>
  </div>
</template>
<script>
export default {
  name: 'Observation'
}
</script>
<style lang="scss" scoped>
.obs-start {
  color: rgb(223, 223, 223);
  font-size: 33px;
  text-shadow: 2px 3px 5px black;
  height: 100%;
  background: no-repeat center/cover url('../assets/images/woodflag.jpg');
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .observation-title { 
    padding-top: 102.28px;
    .home-title {
      font-family: 'sofia';
      margin: 0 0 30px 0;
    }  
    .description {
      max-width: 600px;
    }
  }
}
</style>
