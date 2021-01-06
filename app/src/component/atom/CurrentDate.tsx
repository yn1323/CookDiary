import React from 'react'
import { Typography } from '@material-ui/core'
import { currentDate } from 'src/constant'

export const CurrentDate = () => {
  return (
    <Typography variant="body1" color="textSecondary">
      {currentDate}
    </Typography>
  )
}

export default CurrentDate
