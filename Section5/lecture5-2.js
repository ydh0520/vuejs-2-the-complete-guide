new Vue({
    el:"#app",
    data:{
        title:"The VueJS Instance",
        counter:0
    },
    beforeCreate:function(){
        console.log("beforCeate");
    },
    created:function(){
        console.log("created");
    },
    beforeMount:function(){
        console.log("beformMount");
    },
    mounted:function(){
        console.log("mounted");
    },
    beforeUpdate:function(){
        console.log("beforeUpdtate");
    },
    updated:function(){
        console.log("updated");
    },
    beforeDestroy:function(){
        console.log("beforeDestroy");
    },
    destroyed:function(){
        console.log("destroyed");
    },
    methods:{
        destroy:function(){
            ths.$destroy();
        },
        counterlog:function(){
            this.counter++;
            console.log(this.counter);
        }
    }
})