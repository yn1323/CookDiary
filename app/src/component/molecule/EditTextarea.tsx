import { Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { useCommonStyles } from 'src/constant'

interface Props {
  title: string
  inputRef: any
  defaultValue?: string
  placeholder?: string
}

const EditTextarea = ({
  title,
  inputRef,
  defaultValue = '',
  placeholder = '',
}: Props) => {
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
          defaultValue={defaultValue}
          placeholder={placeholder}
          variant="outlined"
          className={common.width100}
        />
      </Grid>
    </>
  )
}

export default EditTextarea
