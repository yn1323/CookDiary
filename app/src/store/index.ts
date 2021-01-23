import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import { isProduction } from 'src/constant'
import search from 'src/store/search'
import component from 'src/store/component'
import post from 'src/store/post'
import user from 'src/store/user'
import list from 'src/store/list'
import image from 'src/store/image'

const reducer = combineReducers({
  search,
  component,
  post,
  user,
  list,
  image,
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
