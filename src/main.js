import Vue from 'vue'
import App from './App.vue'
import Vuedraggable from 'vuedraggable'

Vue.config.productionTip = false

Vue.use(Vuedraggable);

new Vue({
  render: h => h(App),
}).$mount('#app')
