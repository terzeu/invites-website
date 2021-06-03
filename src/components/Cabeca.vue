<template>
<header class="cabess">
    <nav class="nav-header">
      <p>Formatura</p>
      <ul class="tittle-header">
        <a href="#"><li class="ini">inicio</li></a>
        <a href="#"><li class="loc">local</li></a>
        <a href="#"><li class="conf">confirmar presença</li></a>
      </ul>
    </nav>
</header>
</template>
<script>
export default{
}
</script>
<style>
a {
  text-decoration: none;
}
.cabess {
  position: fixed;
  width: 100%;
  background: rgba(255, 192, 203, 0.514);  
  font-size: 25px;
  margin-top: -69px;
}
.nav-header {
  display: flex;
  justify-content: space-around;
  margin: auto 80px;
}
.tittle-header {
  display: flex;
  list-style: none;
}
.ini {
  margin: 0 30px;
  color: #2c3e50;
}
.loc {
  margin: 10 30px;
  color: #2c3e50;  
}
.conf {
  margin: 0 30px;
  color: #2c3e50;
}
.ini:active {
  color: red;
}
.loc:active {
  color: red;
}
.conf:active {
  color: red;
}
</style>
