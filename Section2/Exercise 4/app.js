new Vue({
  el: '#exercise',
  data: {
    effect: false,
    userClass:"red",
    styleValue:"",
    progressValue:0
  },
  computed:{
    returnEffect:function(){
      return this.effect?"highlight":"shrink";
    },
  },
  methods: {
    startEffect: function () {
      this.effect=!this.effect;
    },
    startProgress: function () {
      var vm=this;
      this.progressValue=0;
      setInterval(function(){
          vm.progressValue+=10;
          console.log(vm.progressValue);
      },1000);
    }
  }
});
