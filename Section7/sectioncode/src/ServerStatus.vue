<template>
<div>
    <p>Server Status:{{status}}</p>
    <hr>
    <button @click="chageStatus">Chage</button>
</div>
</template>

<script>
    export default {
        data:function(){
            return{
                status : "Critical"
            }
        },
        methods:{
            chageStatus(){
                this.status="Normal";
            }
        }
    }
</script>

<style>

</style>
