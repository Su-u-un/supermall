import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";
import toast from "@/components/common/toast";
import {Button} from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(toast);
Vue.use(Button)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
