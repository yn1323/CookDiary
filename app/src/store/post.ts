import { createSlice } from '@reduxjs/toolkit'
import { Post as StateType } from 'Store'

const STORE_NAME = 'post'

export const defaultVal: StateType = {
  id: '',
  title: '',
  tag: '',
  cookedDateList: [],
  img: '',
  ingredients: '',
  steps: '',
  tips: '',
}

const initialState: StateType = {
  ...defaultVal,
}

const State = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    resetPost: () => ({ ...defaultVal }),
    setPost: (state: StateType, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
})

export default State.reducer

export const { resetPost, setPost } = State.actions
