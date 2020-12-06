import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'

import { Search, Add, Menu as MenuIcon } from '@material-ui/icons'
import { useDialog, useDrawer } from 'src/helper'
import SearchCondition from '../organism/SearchCondition'

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
  const { setIsDrawerOpen } = useDrawer()
  const { setIsDialogOpen, setDialogComponent } = useDialog()

  const showSearchDialog = () => {
    setDialogComponent({
      title: '検索',
      component: <SearchCondition />,
    })
    setIsDialogOpen(true)
  }

  return (
    <div className={classes.grow}>
      <AppBar position="static">
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
            <IconButton color="inherit" onClick={() => showSearchDialog()}>
              <Search />
            </IconButton>
            <IconButton color="inherit">
              <Add />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavigationHeader
