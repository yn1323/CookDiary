import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import { LocalOffer } from '@material-ui/icons'

interface Props {
  displayName: string
}

const useStyles = makeStyles({
  tagButton: {
    color: '#eee',
  },
})

export const TagButton = ({ displayName }: Props) => {
  const classes = useStyles()

  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.tagButton}
      startIcon={<LocalOffer />}
    >
      {displayName}
    </Button>
  )
}

export default TagButton
