<template>
    <div class="row">
        <ServerList></ServerList>
        <ServerDetail></ServerDetail>
    </div>
</template>

<script>
    import ServerList from './ServerList.vue'
    import ServerDetail from './ServerDetail.vue'

    export default{
        components:{
            'ServerList' : ServerList,
            'ServerDetail' : ServerDetail
        }
    }
</script>

<style>

</style>

