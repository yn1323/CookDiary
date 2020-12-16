import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import { LocalOffer } from '@material-ui/icons'
import { tagActionToStr, useDialog, usePost } from 'src/helper'
import TagList from '../template/Taglist'

const useStyles = makeStyles({
  tagButton: {
    color: '#eee',
  },
})

export const TagSelectButton = () => {
  const classes = useStyles()

  const { setDialogComponent, setIsDialogOpen } = useDialog()
  const { post, postDispatch } = usePost()
  const { tag } = post
  const handleTagSelected = (action: string) => {
    postDispatch({ tag: action })
    setIsDialogOpen(false)
  }

  const selectDialog = () => {
    setDialogComponent({
      component: (
        <TagList dispatch={(action: string) => handleTagSelected(action)} />
      ),
    })
    setIsDialogOpen(true)
  }

  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.tagButton}
      startIcon={<LocalOffer />}
      onClick={() => selectDialog()}
    >
      {tagActionToStr(tag) || 'タグを選択'}
    </Button>
  )
}

export default TagSelectButton
