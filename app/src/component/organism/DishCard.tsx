import React from 'react'
import { useHistory } from 'react-router-dom'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { Favorite, Restaurant } from '@material-ui/icons'
import { useCommonStyles } from 'src/constant'

interface Props {
  id: string
  img: string
  title: string
  date: string
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      maxHeight: 150,
      marginTop: 5,
      marginBottom: 5,
      cursor: 'pointer',
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

export const DishCard = ({ id, img, title, date }: Props) => {
  const history = useHistory()
  const classes = useStyles()
  const commonCl = useCommonStyles()

  return (
    <Card
      className={classes.root}
      onClick={() => history.push(`/detail/${id}`)}
    >
      <Grid container direction="row">
        <Grid item xs={4}>
          <CardMedia className={classes.media} image={img} title="title" />
        </Grid>
        <Grid item xs={8}>
          <CardContent>
            <Typography variant="body1" color="textSecondary" component="p">
              {title}
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
