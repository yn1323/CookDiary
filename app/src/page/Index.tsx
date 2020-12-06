import React, { Suspense } from 'react'
import Route from 'src/route'

import { Box } from '@material-ui/core'

import Spinner from 'src/component/molecule/CenterSpinner'
import NavigationTop from 'src/component/template/NavigationTop'
import NavigationHeader from 'src/component/template/NavigationHeader'
import NavigationBottom from 'src/component/template/NavigationBottom'
import LeftDrawer from 'src/component/template/LeftDrawer'
import DialogTemplate from 'src/component/template/Dialog'

const Index = () => {
  // buildすると、なぜかRoute内にpyが付与されるので、分岐を追加
  // もしかするとエミュレータでも発生せず、apk化したときのみ発生する事象の回避用かも
  const padding = process.env.NODE_ENV === 'production' ? 0 : 6
  return (
    <>
      {/* <NavigationTop /> */}
      <NavigationHeader />
      <Box m={1} py={0}>
        <Suspense fallback={<Spinner />}>
          <Route />
        </Suspense>
      </Box>
      {/* <NavigationBottom /> */}
      <LeftDrawer />
      <DialogTemplate />
    </>
  )
}

export default Index
