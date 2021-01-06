import React from 'react'

import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { tags } from 'src/constant'
import { Tag } from 'Common'
import { ArrowForwardIos } from '@material-ui/icons/'

interface Props {
  dispatch: (tag: any) => void
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

export const TagList = ({ dispatch }: Props) => {
  const classes = useStyles()
  return (
    <List dense className={classes.root}>
      {tags.map(({ label, img, index, action }) => (
        <>
          <ListItem
            key={index}
            button
            className={classes.listitem}
            onClick={() => dispatch(action)}
          >
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
