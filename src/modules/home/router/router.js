export default [
  {
    path: 'home',
    name: '',
    component: () => import('../pages/indexPage.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../pages/homePage.vue'),
        meta: {
          name: 'home'
        }
      }
    ]
  }
// eslint-disable-next-line eol-last
]
