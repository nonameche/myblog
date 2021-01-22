const menu = [
  {
    path: '/admin',
    icon: 'home',
    name: '首页'
  },
  {
    path: '/admin/article',
    icon: 'acticle',
    name: '文章',
    children: [
      {
        path: '/admin/article/manager',
        icon: 'folder',
        name: '管理'
      },
      {
        path: '/admin/article/add',
        icon: 'edit',
        name: '新增'
      }
    ]
  },
  {
    path: '/admin/navigation',
    icon: 'navigation',
    name: '网站导航',
    children: [
      {
        path: '/admin/navigation/manager',
        icon: 'folder',
        name: '管理'
      },
      {
        path: '/admin/navigation/add',
        icon: 'edit',
        name: '新增'
      }
    ]
  },
  {
    path: '/admin/user',
    icon: 'user',
    name: '用户管理'
  }
]

export default menu
