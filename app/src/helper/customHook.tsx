import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { LocalOffer, List, Search, Settings } from '@material-ui/icons'
import { Component, State, Search as SearchType } from 'Store'

import { toggleDrawer } from 'src/store/component'

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

export const useHasSearchCondition = () => {
  const conditions: any = useSearchCondition()
  const keys = Object.keys(conditions)
  return keys.some(key => conditions[key])
}

// [state, setter]
export const useDrawer = () => {
  const { component = {} as Component } = useSelector((state: State) => state)
  const dispatch = useDispatch()
  return {
    isDrawerOpen: component.isDrawerOpen,
    setIsDrawerOpen: () => dispatch(toggleDrawer()),
  }
}
