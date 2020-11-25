import React, { Suspense } from 'react'
import Route from 'src/route'

import { Box } from '@material-ui/core'

import Spinner from 'src/component/molecule/CenterSpinner'
import NavigationTop from 'src/component/template/NavigationTop'
import NavigationBottom from 'src/component/template/NavigationBottom'

export default () => {
  // buildすると、なぜかRoute内にpyが付与されるので、分岐を追加
  const padding = process.env.NODE_ENV === 'production' ? 0 : 6

  return (
    <>
      <NavigationTop />
      <Box m={1} py={padding}>
        <Suspense fallback={<Spinner />}>
          <Route />
        </Suspense>
      </Box>
      <NavigationBottom />
    </>
  )
}
