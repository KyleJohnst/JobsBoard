import Vue from 'vue'
import App from './App.vue'
import Vuedraggable from 'vuedraggable'

Vue.config.productionTip = false

export const eventBus = new Vue();

Vue.use(Vuedraggable);

new Vue({
  render: h => h(App),
}).$mount('#app')
