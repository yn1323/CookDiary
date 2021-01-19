import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPost } from 'src/helper'
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

export const fetchPost = createAsyncThunk(
  `${STORE_NAME}/fetchPost`,
  async (docId: string) => getPost(docId)
)

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
  extraReducers: ({ addCase }) => {
    addCase(fetchPost.fulfilled, (state: StateType, { payload }: any) => ({
      ...state,
      ...payload,
    }))
  },
})

export default State.reducer

export const { resetPost, setPost } = State.actions
