import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Cart from '../views/Cart.vue'
import Order from '../views/Order.vue'
import Mine from '../views/Mine.vue'
import Info from "../views/Info.vue";
import OrderDetail from "../views/OrderDetail.vue";
import Pay from "../views/Pay.vue";

Vue.use(VueRouter)

// history模块(用于返回)
const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/pay',
      name: 'pay',
      component: Pay
    },
    {
      path: '/orderDetail',
      name: 'orderDetail',
      component: OrderDetail
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.path.startsWith('/login')) {
    window.localStorage.removeItem('access-user')
    next()
  } else if(to.path.startsWith('/register')){
    next()
  }
  else {
    let user = JSON.parse(window.localStorage.getItem('access-user'))
    if (!user) {
      next({path: '/login'})
    } else {
      //校验token
      // axios({
      //   url:'http://localhost:8686/account-service/user/checkToken',
      //   method:'get',
      //   headers:{
      //     token:user.token
      //   }
      // }).then((response) => {
      //   if(response.data.code == -1){
      //     let instance = Toast('登录超时！请重新登录！');
      //     setTimeout(() => {
      //       instance.close();
      //     }, 2000)
      //     next({path: '/login'})
      //   }
      // })
      next()
    }
  }
})

export default router
