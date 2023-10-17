import homePage from '../modules/home/router/router'
import aboutUs from '../modules/aboutUs/router/router'
const routes = [
  {
    path: '',
    redirect: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../modules/home/pages/indexPage.vue') },
      ...homePage,
      ...aboutUs
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
