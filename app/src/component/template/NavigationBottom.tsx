import React, { useEffect, useMemo, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'

import { routes, useStyles } from 'src/constant'
import { useRouteIcons } from 'src/helper'

export default () => {
  const history = useHistory()
  const location = useLocation()
  const routeIcons = useRouteIcons()

  const icons = routes
    .filter(v => v.showBtmNav)
    .map(({ title, path }) => ({
      title,
      icon: routeIcons?.find(v => v.path === path)?.icon || <></>,
      path,
    }))

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
      {icons.map(({ title, icon, path }, i: number) => (
        <BottomNavigationAction
          key={i}
          // label={title}
          icon={icon}
          onClick={() => transition(path)}
        />
      ))}
    </BottomNavigation>
  )
}
