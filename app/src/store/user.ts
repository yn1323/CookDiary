import { createSlice } from '@reduxjs/toolkit'
import { User as StateType } from 'Store'
import { initializeUserId } from 'src/helper'

const STORE_NAME = 'user'

export const defaultVal: StateType = {
  id: initializeUserId(),
}

const initialState: StateType = {
  ...defaultVal,
}

const State = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    setUserId: (state: StateType, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
})

export default State.reducer

export const { setUserId } = State.actions
