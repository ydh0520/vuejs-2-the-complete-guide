import Vue from 'vue'
import App from './App.vue'
import CustomHeader from './Header.vue'
import CustomFooter from './Footer.vue'
import Container from './Container.vue'


Vue.component("CustomHeader",CustomHeader);
Vue.component("CustomFooter",CustomFooter);
Vue.component("Container",Container);

new Vue({
  el: '#app',
  render: h => h(App)
})
