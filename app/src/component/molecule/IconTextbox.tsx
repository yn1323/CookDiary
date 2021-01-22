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
  defaultValue?: string
  inputRef: any
  icon: any
  placeholder?: string
  disabled?: boolean
}
const IconTextbox = ({
  defaultValue = '',
  icon,
  placeholder = '',
  inputRef,
  disabled = false,
}: Props) => {
  const classes = useStyles()
  return (
    <Grid container spacing={1} alignItems="flex-end" className={classes.root}>
      <Grid item>{icon}</Grid>
      <Grid item className={classes.textFieldGrid}>
        <TextField
          inputRef={inputRef}
          label={placeholder}
          defaultValue={defaultValue}
          className={classes.textField}
          disabled={disabled}
        />
      </Grid>
    </Grid>
  )
}

export default IconTextbox
