import React from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'

import {
  Search,
  Add,
  Menu as MenuIcon,
  Edit,
  Details,
} from '@material-ui/icons'
import { useDialog, useDrawer } from 'src/helper'
import { isProduction, useCommonStyles } from 'src/constant'

const useStyles = makeStyles(theme =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    sectionIcon: {
      display: 'flex',
    },
  })
)

const NavigationHeader = () => {
  const classes = useStyles()
  const commonCl = useCommonStyles()
  const history = useHistory()
  const { setIsDrawerOpen } = useDrawer()
  // 今度使う
  // const { setIsDialogOpen, setDialogComponent } = useDialog()

  const showSearchDialog = () => {
    history.push('/tag')
    // setDialogComponent({
    //   title: '検索',
    //   component: <SearchCondition />,
    // })
    // setIsDialogOpen(true)
  }

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={() => setIsDrawerOpen()}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.grow} />
        <div className={classes.sectionIcon}>
          {/*  Edit */}
          {!isProduction && (
            <IconButton
              color="inherit"
              onClick={() => history.push('/edit/test')}
            >
              <Edit />
            </IconButton>
          )}

          {/*  Detail */}
          {!isProduction && (
            <IconButton color="inherit" onClick={() => history.push('/test')}>
              <Details />
            </IconButton>
          )}

          <IconButton color="inherit" onClick={() => showSearchDialog()}>
            <Search />
          </IconButton>
          <IconButton color="inherit" onClick={() => history.push('/new')}>
            <Add />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default NavigationHeader
