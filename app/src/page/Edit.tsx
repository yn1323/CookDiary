import React, { useState } from 'react'
import moment from 'moment-timezone'
import {
  Button,
  Box,
  Grid,
  makeStyles,
  Typography,
  TextField,
} from '@material-ui/core'
import {
  RestaurantMenu,
  CameraAlt as Camera,
  LocalOffer,
  Edit as EditIcon,
} from '@material-ui/icons'

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
  width100: {
    width: '100%',
  },
  tagButton: {
    color: '#eee',
  },
  dateWrapper: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
})

const Edit = () => {
  const classes = useStyles()
  const spacing = 3
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
      <Grid item container xs={12} spacing={spacing} justify="space-between">
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            className={classes.tagButton}
            startIcon={<LocalOffer />}
          >
            タグを選択
          </Button>
        </Grid>
        <Grid item>
          <div className={classes.dateWrapper}>
            <Typography variant="body1" color="textSecondary">
              {`${moment().format('YYYY-MM-DD')}`}
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Button className={classes.photo} fullWidth>
          <Camera className={classes.cameraIcon} color="disabled" />
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">材料</Typography>
        <Grid item xs={12}>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={5}
            defaultValue=""
            placeholder="空でもOK"
            variant="outlined"
            className={classes.width100}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">手順</Typography>
        <Grid item xs={12}>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={5}
            defaultValue=""
            placeholder="空でもOK"
            variant="outlined"
            className={classes.width100}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">コツ・ポイント</Typography>
        <Grid item xs={12}>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={3}
            defaultValue=""
            placeholder="空でもOK"
            variant="outlined"
            className={classes.width100}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Button fullWidth variant="contained">
          登録
        </Button>
      </Grid>
    </Grid>
  )
}

export default Edit
