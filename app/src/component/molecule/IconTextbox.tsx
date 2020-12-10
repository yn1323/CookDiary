import React from 'react'
import { Grid, makeStyles, TextField } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  textFieldGrid: {
    flexGrow: 100,
  },
  textField: {
    width: '100%',
  },
})

interface Props {
  defaultVal: string
  setter: any
  icon: any
  placeholder?: string
}
const IconTextbox = ({ defaultVal, setter, icon, placeholder = '' }: Props) => {
  const classes = useStyles()
  return (
    <Grid container spacing={1} alignItems="flex-end" className={classes.root}>
      <Grid item>{icon}</Grid>
      <Grid item className={classes.textFieldGrid}>
        <TextField
          label={placeholder}
          defaultValue={defaultVal}
          onChange={e => setter(e.target.value)}
          className={classes.textField}
        />
      </Grid>
    </Grid>
  )
}

export default IconTextbox
