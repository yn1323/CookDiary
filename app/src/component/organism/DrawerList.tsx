import React from 'react'

import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core'
import { Settings, HelpOutline, LabelImportant } from '@material-ui/icons'

interface LabelList {
  label: string
  icon: any
}

const useStyles = makeStyles({
  list: {
    paddingRight: 100,
  },
})

const DrawerList = () => {
  const classes = useStyles()
  const list1: LabelList[] = [{ label: 'ヘルプ', icon: <HelpOutline /> }]
  const list2: LabelList[] = [{ label: '設定', icon: <Settings /> }]

  const renderList = (labelList: LabelList[]) =>
    labelList.map(({ label, icon }) => (
      <ListItem button className={classes.list} key={label}>
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
