<template>
<div class="location-start">
  <h1>ONDE VAI SER</h1>
  <div class="location-page">
    <div class="location-info">
      <div class="location-data info-blocks">
        <h2 class="title">
          <font-awesome-icon icon="clock" class="icon" />QUANDO?
        </h2>
        <p>Quinta-feira, 08 de Setembro de 2022 a partir das 20:00</p>
      </div>
      <div class="location-description info-blocks">
        <h2 class="title">
          <font-awesome-icon icon="location-arrow" class="icon" />AONDE?
        </h2>
        <p>Hotel Fazenda Pirapitinga, Luziânia GO 061</p>
      </div>
    </div>
    <div class="location-map info-blocks">
      <h2 class="title">
        <font-awesome-icon icon="map" class="icon" />MAPA
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3827.8455298836757!2d-48.0295705!3d-16.3818294!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935998f7285c0d95%3A0x920159d3a9c1cdf9!2sHotel%20Fazenda%20Pirapitinga!5e0!3m2!1spt-BR!2sbr!4v1623353362641!5m2!1spt-BR!2sbr"
        width="100%" height="300" style="border:0; border-radius:6px;"
        allowfullscreen="" loading="lazy">
      </iframe>
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
  .location-page {
    display: flex;
    font-size: 30px;
    justify-content: center;
    .info-blocks {
      .title {
        color: #feda00;
        .icon {
          margin-right: 10px;
        }
      }
      width: 450px;
      text-align: start;
    }
    .location-info {

    }
  }
}   
</style>
