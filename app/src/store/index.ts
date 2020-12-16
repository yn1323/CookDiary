import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import { isProduction } from 'src/constant'
import search from 'src/store/search'
import component from 'src/store/component'
import post from 'src/store/post'

const reducer = combineReducers({
  search,
  component,
  post,
})

// getDefaultMiddleware: serializeエラーがスマホで発生するため
const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => {
    return isProduction
      ? getDefaultMiddleware({ serializableCheck: false })
      : getDefaultMiddleware({ serializableCheck: false }).concat(logger)
  },
  devTools: isProduction,
})

export default store
