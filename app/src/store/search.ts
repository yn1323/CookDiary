import { createSlice } from '@reduxjs/toolkit'
import { Search as StateType } from 'Store'

const STORE_NAME = 'search'

export const defaultVal: StateType = {
  keyword: '',
  dateRange: '',
  tag: '',
}

const initialState: StateType = {
  ...defaultVal,
}

const State = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    reset: () => ({ ...defaultVal }),
    setSearch: (state: StateType, { payload }) => ({ ...state, ...payload }),
    delSearch: (state: StateType, { payload }) => ({ ...state, [payload]: '' }),
  },
})

export default State.reducer

export const { reset, setSearch, delSearch } = State.actions
