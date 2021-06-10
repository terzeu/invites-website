<template>
  <div class="location-start">
    <h2><font-awesome-icon icon="question-circle" />ONDE VAI SER<font-awesome-icon icon="question-circle" /></h2>
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
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3827.8455298836757!2d-48.0295705!3d-16.3818294!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935998f7285c0d95%3A0x920159d3a9c1cdf9!2sHotel%20Fazenda%20Pirapitinga!5e0!3m2!1spt-BR!2sbr!4v1623353362641!5m2!1spt-BR!2sbr" width="200" height="200" style="border:20;" allowfullscreen="" loading="lazy"></iframe>
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
  height: 100%;
  background: no-repeat center/cover url('../assets/images/woodnoflagleve.jpg');
  display: flex;
  flex-direction: column;
  .location-info {
    margin:  0px 100px 0px 100px;
    display: flex;
    font-size: 30px;
    h2 {
      color: #feda00;
    }
    .location-page {
      display: flex;
      text-align: start;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
}   
</style>