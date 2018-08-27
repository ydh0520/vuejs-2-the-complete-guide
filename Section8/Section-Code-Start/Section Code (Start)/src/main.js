import Vue from 'vue'
import App from './App.vue'

export const eventBus =new Vue({
  methods:{
    //여러곳에서 비슷한 함수를 사용할경우 반복되는 것을 막기 위하여 
    chageAge(age){
      this.$emit('ageWasEdited',age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
