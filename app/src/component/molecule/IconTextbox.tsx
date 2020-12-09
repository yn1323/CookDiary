import React from 'react'
import { Grid, TextField } from '@material-ui/core'

interface Props {
  defaultVal: string
  setter: any
  icon: any
}
const IconTextbox = ({ defaultVal, setter, icon }: Props) => {
  return (
    <Grid container spacing={1} alignItems="flex-end">
      <Grid item>{icon}</Grid>
      <Grid item>
        <TextField
          label="キーワード"
          defaultValue={defaultVal}
          onChange={e => setter(e.target.value)}
        />
      </Grid>
    </Grid>
  )
}

export default IconTextbox
