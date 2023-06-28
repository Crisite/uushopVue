import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import ProductManage from '../views/ProductManage.vue'
import AddProduct from '../views/AddProduct.vue'
import EditProduct from '../views/EditProduct.vue'
import OrderManage from '../views/OrderManage.vue'
import Bar from '../views/Bar.vue'
import BasicLine from '../views/BasicLine.vue'
import StackedLine from '../views/StackedLine.vue'
import Login from '../views/Login.vue'
import Error from '../views/Error.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '商品模块',
      icon: 'el-icon-goods',
      component: HomeView,
      show:true,
      redirect:'/productManage',
      children:[
        {
          path: '/productManage',
          name: '商品管理',
          icon: 'el-icon-s-unfold',
          show:true,
          component: ProductManage
        },
        {
          path: '/addProduct',
          name: '添加商品',
          icon:'el-icon-circle-plus',
          show:true,
          component: AddProduct
        },
        {
          path: '/editProduct',
          name: '修改商品',
          show:false,
          component: EditProduct
        }
      ]
    },
    {
      path: '/',
      name: '订单模块',
      component: HomeView,
      icon: 'el-icon-s-grid',
      show:true,
      redirect:'/productManage',
      children:[
        {
          path: '/orderManage',
          name: '订单管理',
          icon: 'el-icon-document-copy',
          show:true,
          component: OrderManage
        }
      ]
    },
    {
      path: '/',
      name: '销量统计',
      component: HomeView,
      icon: 'el-icon-finished',
      redirect:'/productManage',
      show:true,
      children:[
        {
          path: '/bar',
          name: '总销量',
          icon: 'el-icon-s-data',
          show:true,
          component: Bar
        },
        {
          path: '/basicLine',
          name: '日销量',
          icon: 'el-icon-s-marketing',
          show:true,
          component: BasicLine
        },
        {
          path: '/stackedLine',
          name: '销量明细',
          icon: 'el-icon-s-help',
          show:true,
          component: StackedLine
        }
      ]
    },
    {
      path: '/login',
      name: '登录页面',
      show:false,
      component: Login
    },
    {
      path:'/error',
      name:'登录',
      show:false,
      component: Error
    }
  ]
})

export default router
