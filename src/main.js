import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import VueResource from 'vue-resource'
import router from './routes/index.js'
import 'element-ui/lib/theme-chalk/index.css'
import lang from 'element-ui/lib/locale/lang/en'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(ElementUI, { lang })
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
