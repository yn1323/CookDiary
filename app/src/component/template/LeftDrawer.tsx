import React from 'react'
import Drawer from '@material-ui/core/Drawer'

import DrawerList from 'src/component/organism/DrawerList'

import { useDrawer } from 'src/helper'

const LeftDrawer = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useDrawer()
  return (
    <Drawer anchor="left" open={isDrawerOpen} onClose={setIsDrawerOpen}>
      <DrawerList />
    </Drawer>
  )
}

export default LeftDrawer
