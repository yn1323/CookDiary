import React from 'react'
import { Grid } from '@material-ui/core'
import { ChildFriendly } from '@material-ui/icons'

interface Props {
  children: JSX.Element
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
  alighItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
}

export default ({
  children,
  direction = 'row',
  justify = 'center',
  alighItems = 'center',
}: Props) => {
  return (
    <Grid
      container
      spacing={0}
      alignItems={alighItems}
      justify={justify}
      direction={direction}
      style={{ minHeight: '80vh' }}
    >
      {children}
    </Grid>
  )
}
