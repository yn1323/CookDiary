import React, { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

const Top = lazy(() => import('src/page/Top'))
const NotFound = lazy(() => import('src/page/404'))

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Top} />

      {/* {process.env.NODE_ENV === 'development' && (
        <Route exact path="/gallery" component={Gallery} />
      )} */}
      <Route component={NotFound} status={404} />
    </Switch>
  )
}
