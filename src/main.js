import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router  from './router/index.js'
import store from './store'
import Cookies from 'js-cookie'
require("./api/mock")
Vue.config.productionTip = false

Vue.use(router)
Vue.use(ElementUI)
router.beforeEach((to,from,next)=>{
  const token = Cookies.get('token')
  if(!token&&to.name !== 'login'){
      next({name:'login'})
  }else if(token && to.name === 'login'){
    next({name:'home'})
  }else{
    next()
  }
})
new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    store.commit('addMenu',router)
  }
}).$mount('#app')
