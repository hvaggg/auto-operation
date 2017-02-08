import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'//页面顶部进度条
import 'nprogress/nprogress.css'
import routes from './routes'

Vue.use(ElementUI)
Vue.use(VueRouter)

NProgress.configure({ showSpinner: false });

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  //NProgress.start();
  next();
  // if (to.path == '/login') {
  //   sessionStorage.removeItem('user');
  // }
  // let user = JSON.parse(sessionStorage.getItem('user'));
  // if (!user && to.path != '/login') {
  //   next({ path: '/login' })
  // } else {
  //   next()
  // }
})

//router.afterEach(transition => {
//NProgress.done();
//});

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
  //render: h => h(Login)
}).$mount('#app')

//router.replace('/login')

