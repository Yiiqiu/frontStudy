import Vue from 'vue'// ES6 模块导入方式  commonJS var Vue = require("vue")
import App from './App.vue'
import router from './router/rooter'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)

}).$mount('#app')
// 补充一点。由于main.js这么配置，会把App.vue渲染到index.html的#app里面去。所以，App.vue是根组件。
// App.vue里面的 <tabbar></tabbar> <router-view></router-view>会陆续渲染进来，然后路由rooter.js的配置，比如/cinema，其实是
// 渲染到App.vue里预留的<router-view></router-view>里的
// 学习到现在，我觉得vue里的视图非常强调路由的概念。比如App.vue，是渲染的总入口，给1级路由，/film,/cinema,/center预留<router-view>
// 然后/film下面有二级路由，所以在Film.vue中给'/film/nowplaying'和'/film/comingsoon'，预留<router-view>
