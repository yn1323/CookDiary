import { createSlice } from '@reduxjs/toolkit'
import { User as StateType } from 'Store'
import { initializeUserId, updateLSUserId } from 'src/helper'

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
    updateUserId: (state: StateType, { payload }) => {
      updateLSUserId(payload.id)
      return { ...state, ...payload }
    },
  },
})

export default State.reducer

export const { setUserId, updateUserId } = State.actions
