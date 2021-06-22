<template>
  <div v-for="(route, index) in routes" :key="`route-${index}`"> 
    {{
      route.component
    }}
  </div> 
</template>
<script>
export default {
  name: 'Router',
  props: {
    routes: {
      type: Array,
      required: true
    }
  },
  mounted(){
    console.log(this.routes)
  }
}
</script>
<style>

</style>
