import React from 'react'
import { Grid } from '@material-ui/core'

interface Props {
  children: JSX.Element | React.FC
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
}

export default ({ children, direction = 'row' }: Props) => {
  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justify="center"
      direction={direction}
      style={{ minHeight: '80vh' }}
    >
      {children}
    </Grid>
  )
}
