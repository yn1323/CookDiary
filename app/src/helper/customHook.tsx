import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { LocalOffer, List, Search, Settings } from '@material-ui/icons'
import { State } from 'Store'

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
  const { search } = useSelector((state: State) => state)
  return search
}

export const useHasSearchCondition = () => {
  const conditions: any = useSearchCondition()
  const keys = Object.keys(conditions)
  return keys.some(key => conditions[key])
}
