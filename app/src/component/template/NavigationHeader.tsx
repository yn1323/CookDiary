import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'

import { Search, Add, Menu as MenuIcon } from '@material-ui/icons'
import { useDrawer } from 'src/helper'

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
          {/* <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography> */}
          <div className={classes.grow} />
          <div className={classes.sectionIcon}>
            <IconButton color="inherit">
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
