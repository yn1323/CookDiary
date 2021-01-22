import React from 'react'
import { Grid, makeStyles, Paper } from '@material-ui/core'
import { useCommonStyles } from 'src/constant'

interface Props {
  url: string
}

const useStyles = makeStyles({
  imgWrap: {
    width: '100%',
    height: 200,
  },
  img: {
    objectFit: 'contain',
    width: '100%',
    height: 200,
  },
})

const PostImage = ({ url }: Props) => {
  const classes = useStyles()
  const commonCl = useCommonStyles()
  return (
    <Grid container spacing={0} justify={'center'}>
      <Paper
        elevation={0}
        className={`${classes.imgWrap} ${commonCl.centerVH}`}
      >
        <img src={url} className={classes.img} />
      </Paper>
    </Grid>
  )
}

export default PostImage
