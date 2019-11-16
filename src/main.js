import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import VueResource from 'vue-resource'
import router from './routes/index.js'
import 'element-ui/lib/theme-chalk/index.css'
import lang from 'element-ui/lib/locale/lang/en'
import StarRating from 'vue-star-rating'

Vue.use(Vuex)
Vue.use(StarRating)
Vue.use(VueResource)
Vue.use(ElementUI, { lang })

Vue.http.options.root = 'http://localhost:8000/';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
