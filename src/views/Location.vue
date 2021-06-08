<template>
  <div class="location-page">
    <div class="location-title">
      <p>ONDE VAI SER?</p>
      <font-awesome-icon :icon="['fas', 'users']" />
      <p> QUANDO?</p>
      <p> MAPA DO LOCAL?</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Location'
}
</script>
<style lang="scss" scoped>
.location-page {
  color: rgb(223, 223, 223);
  font-size: 33px;
  text-shadow: 2px 3px 5px black;
  height: 100vh;
  background: no-repeat center/cover url('../assets/images/madeira2.jpg');
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
}   
</style>