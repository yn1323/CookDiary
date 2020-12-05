import { createSlice } from '@reduxjs/toolkit'
import { Search as StateType } from 'Store'

const STORE_NAME = 'search'

export const defaultVal: StateType = {
  keyword: '',
  dateRange: '',
  tag: 0,
}

const initialState: StateType = {
  ...defaultVal,
}

const State = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    reset: () => ({ ...defaultVal }),
    update: (state: StateType, { payload }) => ({ ...state, ...payload }),
  },
})

export default State.reducer

export const { reset, update } = State.actions
