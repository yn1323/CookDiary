import { createSlice } from '@reduxjs/toolkit'
import { Component as StateType, Dialog as DialogType } from 'Store'

const STORE_NAME = 'component'

export const defaultVal: StateType = {
  isDrawerOpen: false,
  isDialogOpen: false,
  dialog: {
    title: '',
    component: '',
  },
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
    setDialog: (state: StateType, { payload }) => ({
      ...state,
      ...payload,
    }),
    showDialog: (state: StateType, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
})

export default State.reducer

export const { toggleDrawer, setDialog, showDialog } = State.actions
