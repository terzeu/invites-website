<template>
  <div class="location-start">
    <h2>ONDE VAI SER?</h2>
    <div class="location-page">
      <div class="location-data">
        <p><font-awesome-icon icon="clock" />QUANDO?<br>
        Quinta-feira, 08 de Setembro de 2022 a partir das 20:00</p>
      </div>
      <div class="location-description">
        <p><font-awesome-icon icon="clock" />AONDE?<br>
        Hotel Fazenda Pirapitinga, Luziânia GO 061</p>
      </div>
      <div class="location-map">
        <p><font-awesome-icon icon="clock" />MAPA<br>
        MAPA AQUI</p>
      </div>
    </div>
  </div>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock } from '@fortawesome/free-solid-svg-icons'

library.add(faClock)
export default {
  name: 'Location'
}
</script>
<style lang="scss" scoped>
.location-start {
  color: rgb(223, 223, 223);
  font-size: 33px;
  text-shadow: 2px 3px 5px black;
  height: 100vh;
  background: no-repeat center/cover url('../assets/images/madeira2.jpg');
  display: flex;
  .location-page{
    justify-content:flex-end; 
    text-align: left;
    .location-data{
    
    }
    .location-description{
      font-size: 30px;
    }
    .location-map{
      
    }
  }
  
}   
</style>