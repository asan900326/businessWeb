import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/Index'
import DetailPage from '@/pages/detail'
import SelectPage from "@/pages/select"
import IntroductionPage from "@/pages/Introduction"


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexPage
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailPage
    },
    {
      path:'/select',
      name:'select',
      component:SelectPage
    },
    {
      path:'/introduction',
      name:'Introduction',
      component:IntroductionPage
    }
  ]
})
