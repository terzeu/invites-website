<template>
  <div class="location-start">
    <h2><font-awesome-icon icon="question-circle" />ONDE VAI SER<font-awesome-icon icon="question-circle" /></h2>
    <div class="location-info">
      <div class="location-page">
        <div class="location-data">
          <p><font-awesome-icon icon="clock" />QUANDO?<br>
          Quinta-feira, 08 de Setembro de 2022 a partir das 20:00</p>
        </div>
        <div class="location-description">
          <p><font-awesome-icon icon="location-arrow" />AONDE?<br>
          Hotel Fazenda Pirapitinga, Luziânia GO 061</p>
        </div>
      </div>
      <div class="location-map">
        <p><font-awesome-icon icon="map" />MAPA<br>
        INSERIR MAPA AQUI</p>
      </div>
    </div>
  </div>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock, faQuestionCircle, faLocationArrow, faMap} from '@fortawesome/free-solid-svg-icons'

library.add(faClock, faQuestionCircle, faLocationArrow, faMap)
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
  background: no-repeat center/cover url('../assets/images/woodnoflagleve.jpg');
  display: flex;
  flex-direction: column;
  .location-info{
    display: flex;
    font-size: 30px;
    .location-page{
      display: flex;
      text-align: start;
      flex-wrap: wrap;
      align-content: stretch;
      justify-content: flex-start;
      align-items: baseline;
      flex-direction: row;
    }
    
  }
}   
</style>