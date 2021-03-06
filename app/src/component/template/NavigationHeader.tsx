import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import { useLocation } from 'react-router-dom'

import {
  Search,
  Add,
  Menu as MenuIcon,
  Edit,
  DeleteForever,
  Details,
} from '@material-ui/icons'
import { useDialog, useDrawer } from 'src/helper'
import { isProduction, useCommonStyles } from 'src/constant'
import { Post, State } from 'Store'
import { delPost, resetPost } from 'src/store/post'

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
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const isDetail = pathname.includes('/detail/')
  const classes = useStyles()
  const commonCl = useCommonStyles()
  const history = useHistory()
  const { setIsDrawerOpen } = useDrawer()
  const { post = {} as Post } = useSelector((state: State) => state)
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
  const deletePost = async () => {
    if (window?.confirm('本当に削除しますか？')) {
      await dispatch(delPost(post.id || ''))
      history.push('/')
    }
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
          {isDetail && (
            <>
              <IconButton
                color="inherit"
                onClick={() => history.push(`/edit/${post.id || ''}`)}
              >
                <Edit />
              </IconButton>

              <IconButton color="inherit" onClick={deletePost}>
                <DeleteForever />
              </IconButton>
            </>
          )}

          {!isDetail && (
            <>
              <IconButton color="inherit" onClick={() => showSearchDialog()}>
                <Search />
              </IconButton>
              <IconButton
                color="inherit"
                onClick={() => {
                  dispatch(resetPost())
                  history.push('/new')
                }}
              >
                <Add />
              </IconButton>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default NavigationHeader
