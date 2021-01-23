import React from 'react'
import { Grid, makeStyles, Paper } from '@material-ui/core'
import { useCommonStyles } from 'src/constant'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import CenterSpinner from './CenterSpinner'

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
  skelton: {
    width: '100%',
    height: 200,
  },
})

const PostImage = ({ url = '' }: Props) => {
  const classes = useStyles()
  const commonCl = useCommonStyles()
  const hasUrl = !!url
  return (
    <Grid container spacing={0} justify={'center'}>
      <Paper
        elevation={0}
        className={`${classes.imgWrap} ${commonCl.centerVH}`}
      >
        {hasUrl && (
          <LazyLoadImage
            src={url} // use normal <img> attributes as props
            className={classes.img}
          />
        )}
        {!hasUrl && <CenterSpinner />}
      </Paper>
    </Grid>
  )
}

export default PostImage
