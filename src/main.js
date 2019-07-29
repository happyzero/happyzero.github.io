import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iview from './iview'
import Util from './lib/util'

Vue.config.productionTip = false

//百度统计
var _hmt = _hmt || [];
document.write(unescape("%3Cscript src='https://hm.baidu.com/h.js%3F09e92fd6115b060dd0d8aea851bd7d38'" +
  " type='text/javascript'%3E%3C/script%3E"));

iview.LoadingBar.config({height:5});

router.beforeEach((to, from, next) => {
  iview.LoadingBar.start();
  //Util.title(to.meta.title);
  Util.title(to.name);
  if (to.path) {
    _hmt.push(['_trackPageview', '/#' + to.fullPath]);
  }
  next();
})

router.afterEach(() => {
  iview.LoadingBar.finish();
  window.scrollTo(0, 0);
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
