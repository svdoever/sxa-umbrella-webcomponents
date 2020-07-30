import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

// Tell Vue to ignore all components defined in the test-components
// package. The regex assumes all components names are prefixed
// 'test'
Vue.config.ignoredElements = [/dmp-addresscard\w*/];

new Vue({
  render: h => h(App),
}).$mount('#app')
