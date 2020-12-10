import { lazy } from 'react'

const ListComponent = lazy(() => import('src/page/List'))
const DetailComponent = lazy(() => import('src/page/Detail'))
const EditComponent = lazy(() => import('src/page/Edit'))
const SearchComponent = lazy(() => import('src/page/Search'))
const TagComponent = lazy(() => import('src/page/Tag'))
const ConfigComponent = lazy(() => import('src/page/Config'))

export const routes = [
  {
    path: '/',
    title: 'リスト',
    component: ListComponent,
    showBtmNav: true,
  },
  {
    path: './index.html',
    title: 'リスト',
    component: ListComponent,
    showBtmNav: false,
  },
  // {
  //   path: '/search',
  //   title: '検索',
  //   component: SearchComponent,
  //   showBtmNav: true,
  // },
  {
    path: '/tag',
    title: 'タグ',
    component: TagComponent,
    showBtmNav: true,
  },
  {
    path: '/config',
    title: '設定',
    component: ConfigComponent,
    showBtmNav: true,
  },
  {
    path: '/new',
    title: '新規追加',
    component: EditComponent,
    icon: null,
    showBtmNav: false,
  },
  {
    path: '/edit/:id',
    title: '編集',
    component: EditComponent,
    icon: null,
    showBtmNav: false,
  },
  {
    path: '/:id',
    title: '詳細',
    component: DetailComponent,
    icon: null,
    showBtmNav: false,
  },
]
