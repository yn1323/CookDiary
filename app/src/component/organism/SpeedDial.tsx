import React from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles, Button, Backdrop } from '@material-ui/core'

import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'

import { Edit, DeleteForever } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 380,
    transform: 'translateZ(0px)',
  },
  speedDial: {
    position: 'absolute',
    right: theme.spacing(2),
    bottom: theme.spacing(2),
  },
}))

const SpeedDialComponent = () => {
  const classes = useStyles()
  const history = useHistory()
  const [open, setOpen] = React.useState(false)
  const [hidden, setHidden] = React.useState(false)

  const handleVisibility = () => {
    setHidden(prevHidden => !prevHidden)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const actions = [
    {
      icon: <Edit />,
      name: '編集',
      callback: () => {
        history.push('/edit/text')
        handleClose()
      },
    },
    {
      icon: <DeleteForever />,
      name: '削除',
      callback: () => {
        if (window?.confirm('本当に削除しますか？')) {
          console.log('削除しました')
        }
        handleClose()
      },
    },
  ]

  return (
    <SpeedDial
      ariaLabel="SpeedDial tooltip example"
      className={classes.speedDial}
      hidden={hidden}
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      {actions.map(action => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.callback}
        />
      ))}
    </SpeedDial>
  )
}

export default SpeedDialComponent
