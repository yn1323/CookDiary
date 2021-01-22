import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import { LocalOffer } from '@material-ui/icons'
import { tagActionToStr, useDialog, usePost } from 'src/helper'
import TagList from 'src/component/template/Taglist'

const useStyles = makeStyles({
  tagButton: {
    color: '#eee',
  },
})

export const TagSelectButton = () => {
  const classes = useStyles()

  const { setDialogComponent, setIsDialogOpen } = useDialog()
  const { post, setPost } = usePost()
  const { tag } = post
  const handleTagSelected = (action: string) => {
    setPost({ tag: action })
    setIsDialogOpen(false)
  }

  const selectDialog = () => {
    setDialogComponent({
      component: (
        <TagList dispatch={(label: string) => handleTagSelected(label)} />
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
      {tag || 'タグを選択'}
    </Button>
  )
}

export default TagSelectButton
