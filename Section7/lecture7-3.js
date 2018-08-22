var cmp={
    data: function () {
        return {
            status: "Critical"
        }
    },
    template: "<p>Server Status {{status}} <button @click='chage'>chage</button></p>",
    methods: {
        chage: function () {
            this.status = "Normal"
        }
    }
};


new Vue({
    el: "#app1",
    //locally한 components
    //이전의 방법이 golbally한 방법이다.
    components:{
        'my-cmp':cmp
    }
});

new Vue({
    //my-cmp가 정의되지 않았으므로 app2에서는 에러가 발생한다.
    el: "#app2"
    
});