import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 主页路由 -> 懒加载
const  Xinge= ()=> import('@/components/xinge/xinge')
const Paihang = ()=> import('@/components/paihang/paihang')
const Gedan = ()=> import('@/components/gedan/gedan')
const Geshou = ()=> import('@/components/geshou/geshou')
// 二级路由 -> 懒加载
const PaihangList = ()=> import('@/components/paihang-list/paihang-list')
const GedanList = ()=> import('@/components/gedan-list/gedan-list')


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
          component: PaihangList,
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
          component: PaihangList
        }
      ]
    },
    {
      path: '/gedan',
      component: Gedan,
      meta: {
        title: '歌单',
        back: false
      },
      children: [
        {
          path: ':id',
          component: GedanList
        }
      ]
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
