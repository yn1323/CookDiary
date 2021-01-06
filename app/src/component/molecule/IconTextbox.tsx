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
  defaultVal?: string
  inputRef: any
  icon: any
  placeholder?: string
}
const IconTextbox = ({
  defaultVal = '',
  icon,
  placeholder = '',
  inputRef,
}: Props) => {
  const classes = useStyles()
  return (
    <Grid container spacing={1} alignItems="flex-end" className={classes.root}>
      <Grid item>{icon}</Grid>
      <Grid item className={classes.textFieldGrid}>
        <TextField
          inputRef={inputRef}
          label={placeholder}
          defaultValue={defaultVal}
          className={classes.textField}
        />
      </Grid>
    </Grid>
  )
}

export default IconTextbox
