import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from '@/layout'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/manage/server',
    children: [
      {
        path: '仪表板',
        component: () => import('@/views/dashboard/index'),
        name: '仪表板',
        meta: {title: '仪表板', icon: 'dashboard', affix: true}
      }
    ]
  },

  {
    path: '/manage',
    component: Layout,
    redirect: '/manage/server',
    name: 'vue_admin_template',
    meta: {
      title: 'vue_admin_template',
      icon: 'table'
    },
    children: [
      {
        path: 'server',
        component: () => import('@/views/manage/server/index'),
        name: '服务器',
        meta: { title: '服务器' }
      },
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
