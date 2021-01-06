import React from 'react'
import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import { RestaurantMenu } from '@material-ui/icons'

interface Props {
  displayTitle: string
}

const useStyles = makeStyles({
  title: {
    marginTop: 10,
  },
  icon: {
    marginTop: 10,
    marginRight: 5,
  },
})

export const PostTitle = ({ displayTitle }: Props) => {
  const classes = useStyles()
  return (
    <Grid container spacing={0} justify={'center'}>
      <Box fontWeight="fontWeightMedium">
        <Grid container spacing={0} justify="center">
          <RestaurantMenu color="disabled" className={classes.icon} />
          <Typography
            variant="h5"
            color="textSecondary"
            className={classes.title}
          >
            {displayTitle}
          </Typography>
        </Grid>
      </Box>
    </Grid>
  )
}

export default PostTitle
