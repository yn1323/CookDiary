import { createSlice } from '@reduxjs/toolkit'
import { Component as StateType } from 'Store'

const STORE_NAME = 'component'

export const defaultVal: StateType = {
  isDrawerOpen: true,
}

const initialState: StateType = {
  ...defaultVal,
}

const State = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    toggleDrawer: (state: StateType) => ({
      ...state,
      isDrawerOpen: !state.isDrawerOpen,
    }),
  },
})

export default State.reducer

export const { toggleDrawer } = State.actions
