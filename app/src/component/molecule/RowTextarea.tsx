import React from 'react'
import { Grid, Paper, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  paper: {
    padding: 10,
    overflow: 'hidden',
    wordWrap: 'break-word',
  },
})

interface Props {
  title: string
  val: string
}

const StableTextarea = ({ title, val }: Props) => {
  const classes = useStyles()
  return (
    <>
      <Typography variant="body1">{title}</Typography>
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={0}>
          <Typography variant="body2">{val}</Typography>
        </Paper>
      </Grid>
    </>
  )
}

export default StableTextarea
