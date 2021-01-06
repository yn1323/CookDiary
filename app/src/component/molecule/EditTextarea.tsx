import { Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { useCommonStyles } from 'src/constant'

interface Props {
  title: string
  inputRef: any
  placeholder?: string
}

const EditTextarea = ({ title, inputRef, placeholder = '' }: Props) => {
  const common = useCommonStyles()
  return (
    <>
      <Typography variant="body2">{title}</Typography>
      <Grid item xs={12}>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={5}
          inputRef={inputRef}
          defaultValue=""
          placeholder={placeholder}
          variant="outlined"
          className={common.width100}
        />
      </Grid>
    </>
  )
}

export default EditTextarea
