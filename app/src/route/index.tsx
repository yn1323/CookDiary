import React, { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

import { routes } from 'src/constant'

const NotFound = lazy(() => import('src/page/404'))

const Router = () => {
  return (
    <Switch>
      {routes.map(({ component, path }) => (
        <Route key={path} exact path={path} component={component} />
      ))}

      {/* {process.env.NODE_ENV === 'development' && (
        <Route exact path="/gallery" component={Gallery} />
      )} */}
      <Route component={NotFound} status={404} />
    </Switch>
  )
}

export default Router
