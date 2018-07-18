import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/index'
import MinePage from '../pages/mine'
import ShopingCart from '../pages/shopingCart'
import SortPage from '../pages/sort'
import DetailPage from '../pages/detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: "商城",
      component: IndexPage
    },
    {
      path: '/mine',
      name: "我啊",
      component: MinePage
    },
    {
      path: '/shopingcart',
      name: "购物车",
      component: ShopingCart
    },
    {
      path: '/sort',
      name: "分类",
      component: SortPage
    },
    // {
    //   path: '/test',
    //   component:DetailPage
    // },
    {
      path: '/detail/:product',
      name: "产品",
      component: DetailPage
    }
  ]
})
