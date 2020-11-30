import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'src/type/state'

import { LocalOffer, List, Search, Settings } from '@material-ui/icons'

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
