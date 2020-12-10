import React, { useState } from 'react'
import { Button, Box, Grid, makeStyles } from '@material-ui/core'
import { RestaurantMenu, CameraAlt as Camera } from '@material-ui/icons'

import IconTextbox from 'src/component/molecule/IconTextbox'

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

const Edit = () => {
  const classes = useStyles()
  const spacing = 2
  const [title, setTitle] = useState('')
  return (
    <Grid container spacing={spacing}>
      <Grid item xs={12}>
        <IconTextbox
          setter={setTitle}
          defaultVal="none"
          icon={<RestaurantMenu color="disabled" />}
          placeholder="料理名"
        ></IconTextbox>
      </Grid>
      <Grid item container xs={12} spacing={spacing} justify="space-around">
        <Grid item>tag</Grid>
        <Grid item>date</Grid>
      </Grid>
      <Grid item xs={12}>
        <Button className={classes.photo} fullWidth>
          <Camera className={classes.cameraIcon} color="disabled" />
        </Button>
      </Grid>
    </Grid>
  )
}

export default Edit
