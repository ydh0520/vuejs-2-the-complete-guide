var data={
    status:"Critical"
}

Vue.component('my-cmp',{
    data: function(){
        //다음과 같이 간편하게 작성할수 있으나 문제가 생긴다.
        //각 컴포넌트에서 data의 값을 공유하게 된다.
        //포인터가 같은 곳을 가르키기 때문에 발생하는 문제
        //return data;

        //따라서 다음과 같이 작성하는것을 추천한다.
        return{
            status:"Critical"
        }
    },
    template:"<p>Server Status {{status}} <button @click='chage'>chage</button></p>",
    methods:{
        chage:function(){
            this.status="Normal"
        }
    }
})

new Vue({
    el:"#app"
})