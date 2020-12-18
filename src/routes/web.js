import { GITHUB } from '@/config'
import Layout from '@/layout/web'
import lazy from '@/components/Lazy'

export default {
  path: '/',
  name: 'home',
  component: Layout,
  childRoutes: [
    { path: '', component: lazy(() => import('@/views/web/home')) },
    { path: 'article/:id', component: lazy(() => import('@/views/web/article')) },
    { path: 'archives', component: lazy(() => import('@/views/web/archives')), title: '归档' },
    { path: 'categories', component: lazy(() => import('@/views/web/categories')), title: '分类' },
    { path: 'categories/:name', component: lazy(() => import('@/views/web/tag')) },
    { path: 'tags/:name', component: lazy(() => import('@/views/web/tag')) },
    { path: '/github', component: GITHUB.enable && lazy(() => import('@/components/GithubLogining')) },
    { path: '/about', component: lazy(() => import('@/views/web/about')), title: '关于' },
    { path: '*', component: lazy(() => import('@/components/404')) },
  ],
}
