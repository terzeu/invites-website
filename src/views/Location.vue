<template>
  <div class="location-start">
    <h1><font-awesome-icon icon="question-circle" />ONDE VAI SER<font-awesome-icon icon="question-circle" /></h1>
    <div class="location-info">
      <div class="location-page">
        <div class="location-data">
          <h2><font-awesome-icon icon="clock" />QUANDO?</h2>
          <p>Quinta-feira, 08 de Setembro de 2022 a partir das 20:00</p>
        </div>
        <div class="location-description">
          <h2><font-awesome-icon icon="location-arrow" />AONDE?</h2>
          <p>Hotel Fazenda Pirapitinga, Luziânia GO 061</p>
        </div>
      </div>
      <div class="location-map">
        <h2><font-awesome-icon icon="map" />MAPA</h2>
        <p>INSERIR MAPA AQUI</p>
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
    margin:  0px 250px 250px 250px;
    display: flex;
    font-size: 30px;
    h2 {
      color: #feda00;
    }
    .location-page{
      display: flex;
      text-align: start;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
}   
</style>