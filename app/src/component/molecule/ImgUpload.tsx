import { Button, makeStyles } from '@material-ui/core'
import { CameraAlt as Camera } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles({
  photo: {
    outline: '1px solid #ccc',
    height: 200,
    background: '#ddd',
  },
  cameraIcon: {
    fontSize: 60,
  },
})

export const ImgUpload = () => {
  const classes = useStyles()
  return (
    <Button className={classes.photo} fullWidth>
      <Camera className={classes.cameraIcon} color="disabled" />
    </Button>
  )
}

export default ImgUpload
