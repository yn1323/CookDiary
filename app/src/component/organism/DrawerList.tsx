import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core'
import { Home, Settings, HelpOutline } from '@material-ui/icons'
import { useDrawer } from 'src/helper'

interface LabelList {
  label: string
  icon: any
  path: string
}

const useStyles = makeStyles({
  list: {
    paddingRight: 100,
  },
})

const DrawerList = () => {
  const history = useHistory()
  const classes = useStyles()
  const { setIsDrawerOpen } = useDrawer()
  const list1: LabelList[] = [
    // { label: 'ヘルプ', icon: <HelpOutline />, path: '/' },
  ]
  const list2: LabelList[] = [
    { label: 'ホーム', icon: <Home />, path: '/' },
    { label: '設定', icon: <Settings />, path: '/config' },
  ]
  const transition = (path: string) => {
    history.push(path)
    setIsDrawerOpen()
  }
  const renderList = (labelList: LabelList[]) =>
    labelList.map(({ label, icon, path }) => (
      <ListItem
        button
        className={classes.list}
        key={label}
        onClick={() => transition(path)}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label}></ListItemText>
      </ListItem>
    ))

  return (
    <List>
      {renderList(list1)}
      <Divider />
      {renderList(list2)}
    </List>
  )
}

export default DrawerList
