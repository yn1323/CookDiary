import React, { useEffect, useMemo, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { Group, Settings } from '@material-ui/icons'

import { useStyles } from 'src/constant'

interface Icon {
  label: string
  icon: any
  path: string
}

export default () => {
  const history = useHistory()
  const location = useLocation()
  const paths = [
    { path: '/', index: 0 },
    // { path: '/horse', index: 1 },
    // { path: '/race', index: 2 },
    // { path: '/config', index: 3 },
  ]
  const [scene, setScene] = useState(
    paths.find(v => v.path === location.pathname)?.index || 0
  )
  const classes = useStyles()

  // ナビゲーションのハイライト変更
  useEffect(() => {
    setScene(paths.find(v => v.path === location.pathname)?.index || 0)
  }, [location.pathname])

  const icons: Icon[] = useMemo(() => {
    return [
      { label: '設定', icon: <Settings />, path: '/config' },
      { label: 'TOP', icon: <Group />, path: '/' },
    ]
  }, [])

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
