import Vue from 'vue'
import Router from 'vue-router'
// import Xinge from '@/components/xinge/xinge'
// import Paihang from '@/components/paihang/paihang'
// import Gedan from '@/components/gedan/gedan'
// import Geshou from '@/components/geshou/geshou'
// import PaihangInfo from '@/components/paihang-info/paihang-info'
Vue.use(Router)

// 主页路由 -> 懒加载
const  Xinge= ()=> import('@/components/xinge/xinge')
const Paihang = ()=> import('@/components/paihang/paihang')
const Gedan = ()=> import('@/components/gedan/gedan')
const Geshou = ()=> import('@/components/geshou/geshou')
// 二级路由 -> 懒加载
const PaihangInfo = ()=> import('@/components/paihang-info/paihang-info')


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/xinge'
    },
    {
      path: '/xinge',
      component: Xinge,
      meta:{
        title: '新歌',
        back: false
      },
      children:[
        {
          path: 'list',
          component: PaihangInfo,
          meta:{
            title: '歌单列表',
            back: true
          }
        }
      ]
    },
    {
      path: '/paihang',
      component: Paihang,
      meta:{
        title: '排行',
        back: false
      },
      children:[
        {
          path: ':id',
          component: PaihangInfo,
          // meta:{
          //   title: '排行详情',
          //   back: true
          // }
        }
      ]
    },
    {
      path: '/gedan',
      component: Gedan,
      meta:{
        title: '歌单',
        back: false
      }
    },
    {
      path: '/geshou',
      component: Geshou,
      meta:{
        title: '歌手',
        back: false
      }
    }
  ],
  mode:'history'
})
