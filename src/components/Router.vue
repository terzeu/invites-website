<template>
<div v-for="(route, index) in route" :key="`route-${index}`"> 
    {{
        route
    }}
</div> 
</template>
<script>
import route from '../App.vue'
export default {
    name: 'Router',
    props:{
        route
    }
}
</script>
<style>

</style>
