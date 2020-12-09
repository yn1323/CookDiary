import React from 'react'
import { Grid } from '@material-ui/core'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Card, CardMedia, CardContent, CardActions } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { Favorite, Restaurant } from '@material-ui/icons'
import { useCommonStyles } from 'src/constant'

interface Props {
  url: string
  text: string
  date: string
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      maxHeight: 150,
      marginTop: 5,
      marginBottom: 5,
    },
    media: {
      height: '100%',
      width: '100%',
    },
    cardActions: {
      height: 30,
    },
    date: {
      marginLeft: 5,
    },
  })
)

export const DishCard = ({ url, text, date }: Props) => {
  const classes = useStyles()
  const commonCl = useCommonStyles()

  return (
    <Card className={classes.root}>
      <Grid container direction="row">
        <Grid item xs={4}>
          <CardMedia className={classes.media} image={url} title="title" />
        </Grid>
        <Grid item xs={8}>
          <CardContent>
            <Typography variant="body1" color="textSecondary" component="p">
              {text}
            </Typography>
          </CardContent>
          <CardActions
            disableSpacing
            className={`${commonCl.alignRight} ${classes.cardActions}`}
          >
            <Restaurant color="secondary" />
            <Typography
              variant="caption"
              color="textSecondary"
              component="span"
              className={classes.date}
            >
              {date}
            </Typography>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}

export default DishCard
