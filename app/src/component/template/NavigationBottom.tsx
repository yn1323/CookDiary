import React, { useEffect, useMemo, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { Edit, LocalOffer, Group, Search, Settings } from '@material-ui/icons'

import { useStyles } from 'src/constant'

interface Icon {
  label: string
  icon: any
  path: string
}

const icons = [
  { label: 'TOP', icon: <Group />, path: '/' },
  { label: 'タグ', icon: <LocalOffer />, path: '/tag' },
  { label: '編集', icon: <Edit />, path: '/edit' },
  { label: '検索', icon: <Search />, path: '/search' },
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
          label={label}
          icon={icon}
          onClick={() => transition(path)}
        />
      ))}
    </BottomNavigation>
  )
}
