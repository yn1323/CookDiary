import React from 'react'
import { Dialog, DialogTitle, DialogContent, Divider } from '@material-ui/core'
import { useDialog } from 'src/helper'

const DialogTemplate = () => {
  const { isDialogOpen, title, component, setIsDialogOpen } = useDialog()

  return (
    <Dialog
      open={isDialogOpen}
      keepMounted
      onClose={() => setIsDialogOpen(false)}
      fullWidth
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      {title && <Divider />}
      <DialogContent>{component}</DialogContent>
    </Dialog>
  )
}

export default DialogTemplate
