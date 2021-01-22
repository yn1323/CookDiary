import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { LocalOffer, List, Search, Settings } from '@material-ui/icons'
import {
  Component,
  List as ListState,
  State,
  Search as SearchType,
  Post,
} from 'Store'

import {
  setDialog,
  setImgUploading,
  showDialog,
  toggleDrawer,
} from 'src/store/component'
import { setSearch } from 'src/store/search'
import { fetchPost, setPost, resetPost, updPost } from 'src/store/post'

export const useFetch = async ({
  action = null as any,
  param = {},
  watch = [] as any,
}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    const f = async () => {
      await dispatch(await action({ ...param }))
    }
    f()
  }, watch)
}

// useless
export const useFirestore = async ({
  action = null as any,
  watch = [] as any,
}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    const f = async () => {
      await dispatch(await action())
    }
    f()
  }, watch)
}

export const usePrevious = (value: any) => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export const useRouteIcons = () => [
  { path: '/', icon: <List /> },
  { path: './index.html', icon: <List /> },
  { path: '/search', icon: <Search /> },
  { path: '/tag', icon: <LocalOffer /> },
  { path: '/config', icon: <Settings /> },
]

export const useSearchCondition = () => {
  const { search = {} as SearchType } = useSelector((state: State) => state)
  return search
}

export const useSearch = () => {
  const { search = {} as SearchType } = useSelector((state: State) => state)
  const dispatch = useDispatch()
  return {
    keyword: search.keyword,
    dateRange: search.dateRange,
    tag: search.tag,
    setSearch: ({ keyword, dateRange, tag }: any) =>
      dispatch(
        setSearch({
          keyword: keyword ?? '',
          dateRange: dateRange ?? '',
          tag: tag ?? 0,
        })
      ),
  }
}

export const useHasSearchCondition = () => {
  const conditions: any = useSearchCondition()
  const keys = Object.keys(conditions)
  return keys.some(key => conditions[key])
}

// [state, setter]
export const useDrawer = () => {
  const { component = {} as Component } = useSelector((state: State) => state)
  const dispatch = useDispatch()
  const { isDrawerOpen } = component
  return {
    isDrawerOpen,
    setIsDrawerOpen: () => dispatch(toggleDrawer()),
  }
}

export const useDialog = () => {
  const { component = {} as Component } = useSelector((state: State) => state)
  const dispatch = useDispatch()
  const { isDialogOpen } = component
  return {
    isDialogOpen,
    title: component.dialog.title,
    component: component.dialog.component,
    setIsDialogOpen: (open: boolean) =>
      dispatch(showDialog({ isDialogOpen: open })),
    setDialogComponent: ({
      title = '' as string,
      component = (<></>) as any,
    }) => dispatch(setDialog({ dialog: { title, component } })),
  }
}

export const usePost = () => {
  const dispatch = useDispatch()
  const { post = {} as Post } = useSelector((state: State) => state)

  return {
    isExist: !!post.title,
    post,
    getPost: (docId: string) => dispatch(fetchPost(docId)),
    updatePost: (post: Post) => dispatch(updPost(post)),
    setPost: (obj: { [key: string]: any }) => dispatch(setPost(obj)),
    resetPost: () => dispatch(resetPost()),
  }
}

export const useImgUploading = () => {
  const dispatch = useDispatch()
  const { component = {} as Component } = useSelector((state: State) => state)
  const start = () => dispatch(setImgUploading({ isImgUploading: true }))
  const end = () => dispatch(setImgUploading({ isImgUploading: false }))
  return {
    isImgUploading: component.isImgUploading,
    initializeImgUploading: end,
    startImgUploading: start,
    endImgUploading: end,
  }
}
