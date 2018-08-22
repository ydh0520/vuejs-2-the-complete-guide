//반복되는 인스턴스 사용을 위해 컴포넌트를 사용한다.
//뷰 인스턴스는 처음으로 대상이 되는 요소에만 적용되기때문
Vue.component('my-cmp',{
    //컴포넌트에서는 data 를 제공하지 않기 때문에 함수 & return 형태로 데이터를 적용한다.
    data: function(){
        return {
            status:"Critical"
        }
    },
    template:"<p>Server Status {{status}}</p>"
})

new Vue({
    el:"#app"
})