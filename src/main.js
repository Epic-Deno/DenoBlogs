/*
 * @Description: It was written by Pony
 * @Version: 2.0
 * @Autor: Pony
 * @Date: 2020-08-16 15:13:39
 * @LastEditors: Pony
 * @LastEditTime: 2020-08-16 18:06:41
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
Vue.config.productionTip = false

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
//获得标题
router.afterEach(route => {
  vm.$el.scrollTop = 0;
  // 从路由的元信息中获取 title 属性
  if (route.meta.title) {
    document.title = route.meta.title;
  }
});