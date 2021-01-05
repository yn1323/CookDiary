import React from 'react'
import { Typography } from '@material-ui/core'
import { currentDate } from 'src/constant'

interface Props {
  displayDate: string
}

export const Date = ({ displayDate }: Props) => {
  return (
    <Typography variant="body1" color="textSecondary">
      {displayDate}
    </Typography>
  )
}

export default Date
