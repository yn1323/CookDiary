import React from 'react'
import { Grid, makeStyles, Paper } from '@material-ui/core'

interface Props {
  url: string
}
const PostImage = ({ url }: Props) => {
  return (
    <Grid container spacing={0} justify={'center'}>
      <Paper elevation={0}>
        <img src={url} />
      </Paper>
    </Grid>
  )
}

export default PostImage
