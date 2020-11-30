import React, { useEffect, useMemo, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { Edit, LocalOffer, List, Search, Settings } from '@material-ui/icons'

import { useStyles } from 'src/constant'

interface Icon {
  label: string
  icon: any
  path: string
}

const icons = [
  { label: 'TOP', icon: <List />, path: '/' },
  { label: '検索', icon: <Search />, path: '/search' },
  { label: 'タグ', icon: <LocalOffer />, path: '/tag' },
  { label: '設定', icon: <Settings />, path: '/config' },
]

export default () => {
  const history = useHistory()
  const location = useLocation()

  const paths = useMemo(
    () => icons.map(({ path }, i) => ({ path, index: i })),
    []
  )
  const currentSceneIndex = () =>
    paths.find(v => v.path === location.pathname)?.index || 0
  const [scene, setScene] = useState(currentSceneIndex())
  const classes = useStyles()

  // ナビゲーションのハイライト変更
  useEffect(() => {
    setScene(currentSceneIndex())
  }, [location.pathname])

  const transition = (path: string) => history.push(path)

  return (
    <BottomNavigation value={scene} className={classes.stickBottom} showLabels>
      {icons.map(({ label, icon, path }: Icon, i: number) => (
        <BottomNavigationAction
          key={i}
          // label={label}
          icon={icon}
          onClick={() => transition(path)}
        />
      ))}
    </BottomNavigation>
  )
}
