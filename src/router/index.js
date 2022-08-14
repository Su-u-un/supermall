import Vue from 'vue'
import VueRouter from "vue-router";

const Home = ()=>import('../views/Home/home')
const Menu = ()=>import('../views/Menu/menu')
const Shopcar = ()=>import('../views/Shopcar/shopcar')
const User = ()=>import('../views/User/user')

Vue.use(VueRouter)

const routes=[
  {
    path:'/home',
    component:Home
  },
  {
    path:'/menu',
    component:Menu
  },
  {
    path:'/shopcar',
    component:Shopcar
  },
  {
    path:'/user',
    component:User
  },
  {
    path:'',
    redirect:'/home'
  }
]

export default new VueRouter({
  routes,
  mode:'history'
})