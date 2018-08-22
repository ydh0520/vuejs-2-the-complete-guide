var data={
  title: 'The VueJS Instance',
  showParagraph: false
}

//재사용성 증가를 위한 컴포넌트 사용법으로 뷰 인스터스 보다 먼저 선언되지 않을경우 Unknown custom element error 가 발생할 수 있다.
Vue.component('hello',{
  template:'<h1>componet</h1>'
})

//변수를 생성하고 새로운 뷰 인스턴스를 변수에 저장하여 다른 인스턴스에서 사용가능하게 한다.
var vm1 = new Vue({
  //el 대신하여 vm1.$mount("#app1")을 사용하는 것도 가능하다.
  el: '#app1',
  
  //일반 js와 병행하여 사용이 가능하다.
  data:data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      //$refs를 통해 ref를 사용한 html의 dom을 그대로 가져올 수 있다.
      console.log(this.$refs);
      //$refs.name을 통해 특정 ref dom을 가져와 사용이 가능하다.
      this.$refs.mybutton.innerText="test"
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

var vm2 = new Vue({
  el:"#app2",
  data:{
    title:"The second Instance"
  },
  methods:{
    changeVm1Title:function(){
      //다른 인스턴스에 접근이 가능하다.
      vm1.title="chaged!"
    }
  }
})

//일반적인 js 에서 또한 뷰인스턴스에 접근이 가능하다.
// setTimeout(function(){
//   vm1.title="chagejs";
// },3000);

//다음과 같이 새로운 변수를 추가할수는 있으나 기존의 변수들과 같이 사용할수는 없다.
//vm1.newProps="~~"

//vue 인스턴스 밖에서 또한 ref를 통하여 해당 dom에 접근이 가능하다
//이러한 접근은 반응성에 좋지 않다.
//vm1.$refs.heading.innerText="chageed";

//template 를 사용하여 html 에 삽입할수 있다. 자주 사용하지는 않지만 가능한 기능
var vm3=new Vue({
  template: '<h1>Hello!!</h1>'
});;
vm3.$mount("#app3");
