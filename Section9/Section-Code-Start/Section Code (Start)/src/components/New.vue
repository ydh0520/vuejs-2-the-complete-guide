<template>
   <div>
       <h3>New Quote</h3>
       <button @click="counter++">increase</button>
       <p>{{counter}}</p>
   </div>
</template>

<script>
    export default {
        data:function(){
            return {
                counter:0
            }
        },
        destroyed() {
            console.log("Destroyed")
        },
        deactivated() {
            console.log("Deactiviated")
        },
        activated() {
            console.log("Activiated")
        },
    }
</script>

<style scoped>
</style>
