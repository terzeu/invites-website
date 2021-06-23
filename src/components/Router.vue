<template>
  <component v-for="(route, index) in routes" :key="`route-${index}`" :is="route.name"/> 
</template>
<script>
import routes,{components} from '../routers'
export default {
  name: 'Router',
  components: components,
  mounted() {
    console.log(components)
  },
  data() {
    return {routes}
  }
}
</script>
<style>

</style>
