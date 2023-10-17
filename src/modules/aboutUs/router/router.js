export default [
  {
    path: 'about-us',
    name: '',
    component: () => import('../pages/indexPage.vue'),
    children: [
      {
        path: '',
        name: 'about-us',
        component: () => import('../pages/aboutUs.vue'),
        meta: {
          name: 'about-us'
        }
      }
    ]
  }
]
