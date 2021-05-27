<template>
<header class="cabess">
    <nav>
      <p>Formatura</p>
      <ul>
        <a href="localhost:8080"><li>inicio</li></a>
        <li>local</li>
         <li>confirmar presença</li>
      </ul>
    </nav>
</header>
</template>
<script>
export default{

}
</script>

<style lang="scss" >

body{
  height: calc(100vh - 150px);
  margin: 0;
  background: no-repeat center/cover url('../assets/images/madeira.jpg');
  
}
.cabess{
  background: black;  
  font-size: 25px;
  margin-top: -69px;
  cursor: pointer;
}
ul{
  list-style: none;
  display: flex;
  
}
li{
  margin: 0 30px;
}
nav{
  display: flex;
  justify-content: space-between;
  margin: auto 80px;
}
</style>
