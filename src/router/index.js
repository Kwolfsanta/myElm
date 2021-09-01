import Vue from 'vue'
import Router from 'vue-router'
import App from "../App.vue"
import home from "../pages/home/home.vue"
import login from "../pages/login/login.vue"
import register from "../pages/register/register.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      redirect:'/home',
      children: [
        {
          name:'home',
          path:'home',
          component:home
        },
        {
          name:"login",
          path:'login',
          component:login
        },
        {
          name:'register',
          path:'register',
          component:register,
        }
      ]
    }
  ]
})
