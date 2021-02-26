import React, { useEffect, useState, Suspense } from 'react'
import Route from 'src/route'

import { Box } from '@material-ui/core'

import Spinner from 'src/component/molecule/CenterSpinner'
import NavigationTop from 'src/component/template/NavigationTop'
import NavigationHeader from 'src/component/template/NavigationHeader'
import NavigationBottom from 'src/component/template/NavigationBottom'
import LeftDrawer from 'src/component/template/LeftDrawer'
import DialogTemplate from 'src/component/template/Dialog'
import Loading from 'src/component/template/Loading'
import { signIn } from 'src/helper'
// import SpeedDialComponent from 'src/component/organism/SpeedDial'

const Index = () => {
  const [isSignIn, setIsSignIn] = useState(false)
  useEffect(() => {
    signIn({
      successed: () => setIsSignIn(true),
      failed: () => alert('Please Restart'),
    })
  }, [])
  // buildすると、なぜかRoute内にpyが付与されるので、分岐を追加
  // もしかするとエミュレータでも発生せず、apk化したときのみ発生する事象の回避用かも
  const padding = process.env.NODE_ENV === 'production' ? 7 : 7
  if (!isSignIn) {
    return <Loading />
  }
  return (
    <>
      {/* <NavigationTop /> */}
      <NavigationHeader />
      <Box m={1} pt={padding}>
        <Suspense fallback={<Spinner />}>
          <Route />
        </Suspense>
      </Box>
      {/* <NavigationBottom /> */}
      <LeftDrawer />
      <DialogTemplate />
      {/* <SpeedDialComponent /> */}
    </>
  )
}

export default Index
