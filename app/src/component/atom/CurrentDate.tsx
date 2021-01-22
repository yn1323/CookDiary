import React from 'react'
import { Typography } from '@material-ui/core'
import { currentDate } from 'src/constant'

interface Props {
  defaultDate: string
}

export const CurrentDate = ({ defaultDate = '' }: Props) => {
  return (
    <Typography variant="body1" color="textSecondary">
      {defaultDate || currentDate}
    </Typography>
  )
}

export default CurrentDate
