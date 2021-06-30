<template>
<div id = "location-start" class="location-start">
  <h2 class="main-title">ONDE VAI SER</h2>
  <div class="location-page">
    <div class="location-info">
      <div class="location-data info-blocks">
        <h3 class="title">
          <font-awesome-icon icon="clock" class="icon" />QUANDO?
        </h3>
        <p class="text">Quinta-feira, 31 de Julho de 2021 a partir das 20:00</p>
      </div>
      <div class="location-description info-blocks">
        <h3 class="title">
          <font-awesome-icon icon="location-arrow" class="icon" />AONDE?
        </h3>
        <p class="text">Hotel Fazenda Pirapitinga, Luziânia GO 061</p>
      </div>
    </div>
    <div class="location-map info-blocks">
      <h3 class="title">
        <font-awesome-icon icon="map" class="icon" />MAPA
      </h3>
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
  background: no-repeat center/cover url('../assets/images/woodflag.jpg');
  display: flex;
  flex-direction: column;
  justify-content: center;
  .main-title{
    font-family: 'sofia';
    font-size: 64px;
    margin-bottom: 60px;
  }
  .location-page {
    display: flex;
    font-size: 30px;
    justify-content: center;
    flex-wrap: wrap;
    .info-blocks {
      .text{
        margin-block: 0;
        margin-inline: 0;
        margin-bottom: 60px;
      }
      .title {
        font-family: 'sofia';
        margin: 6px 0 14px 7px;
        color: #feda00;
        .icon {
          margin-right: 10px;
        }
      }
      max-width: 450px;
      width: 100%;
      text-align: start;
    }
  }
}
</style>
