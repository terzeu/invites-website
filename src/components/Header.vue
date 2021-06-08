<template>
<header class="header-component">
    <nav class="header-nav">
      <p>Formatura</p>
      <ul class="header-ul">
        <li><a href="#" class="header-link">inicio</a></li>
        <li><a href="#" class="header-link">local</a></li>
        <li><a href="#" class="header-link">confirmar presença</a></li>
      </ul>
    </nav>
</header>
</template>
<script>
export default{
  name: 'Header'
}
</script>
<style lang="scss" scoped>
.header-component {
  position: fixed;
  width: 100%;
  background: rgba(255, 192, 203, 0.884);  
  font-size: 25px;
  .header-nav {
    display: flex;
    justify-content: space-around;
    .header-ul {
      list-style: none;
      display: flex;
      align-items: center;
      color: green;
      .header-link {
        margin: 0 30px;
        color: #2c3e50;
        text-decoration: none;
        &:hover {
          color: blue;
        }
        &:active {
          color: red;
        }
      }  
    }
  }  
}
</style>
