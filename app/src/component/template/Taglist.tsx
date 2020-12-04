import React from 'react'

import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Tag } from 'Common'
import { ArrowForwardIos } from '@material-ui/icons/'

interface Props {
  tags: Tag[]
}

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    listitem: {
      '&:not(:last-child)': {
        paddingBottom: 5,
        borderBottom: '1px solid #ddd',
      },
      '&:not(:first-child)': {
        paddingTop: 5,
      },
    },
  })
)

export const TagList = ({ tags }: Props) => {
  const classes = useStyles()
  return (
    <List dense className={classes.root}>
      {tags.map(({ label, img, action }) => (
        <>
          <ListItem key={label} button className={classes.listitem}>
            <ListItemAvatar>
              <Avatar alt={label} src={img} variant="square" />
            </ListItemAvatar>
            <ListItemText id={label} primary={label} />
            <ArrowForwardIos fontSize="small" color="primary" />
          </ListItem>
        </>
      ))}
    </List>
  )
}

export default TagList
