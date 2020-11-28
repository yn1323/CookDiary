import React, { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

const List = lazy(() => import('src/page/List'))
const Detail = lazy(() => import('src/page/Detail'))
const Edit = lazy(() => import('src/page/Edit'))
const Search = lazy(() => import('src/page/Search'))
const Tag = lazy(() => import('src/page/Tag'))
const NotFound = lazy(() => import('src/page/404'))

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={List} />
      <Route exact path="./index.html" component={List} />
      <Route exact path="/detail" component={Detail} />
      <Route exact path="/edit" component={Edit} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/tag" component={Tag} />

      {/* {process.env.NODE_ENV === 'development' && (
        <Route exact path="/gallery" component={Gallery} />
      )} */}
      <Route component={NotFound} status={404} />
    </Switch>
  )
}
