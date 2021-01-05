import { Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { useCommonStyles } from 'src/constant'

interface Props {
  title: string
  val: string
}

const StableTextarea = ({ title, val }: Props) => {
  const common = useCommonStyles()
  return (
    <>
      <Typography variant="body2">{title}</Typography>
      <Grid item xs={12}>
        <TextField
          disabled
          id="outlined-multiline-static"
          multiline
          rows={5}
          defaultValue={val}
          variant="outlined"
          className={common.width100}
        />
      </Grid>
    </>
  )
}

export default StableTextarea
