<template>
<routes.component/>
<div v-for="(routes, index) in routes" :key="`route-${index}`"> 
    {{
        routes.id
    }}
</div> 
</template>
<script>
import index from '../routers/index.js'
export default {
    name: 'Router',
    data() {
        return {
            routes: index
        };
    }
}
</script>
<style>

</style>