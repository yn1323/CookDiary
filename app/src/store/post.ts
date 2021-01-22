import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deletePost, getPost, updatePost } from 'src/helper'
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

export const delPost = createAsyncThunk(
  `${STORE_NAME}/delPost`,
  async (docId: string) => deletePost(docId)
)

export const updPost = createAsyncThunk(
  `${STORE_NAME}/updatePost`,
  async (post: StateType) => updatePost(post)
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
    })).addCase(delPost.fulfilled, (state: StateType, { payload }: any) => ({
      ...defaultVal,
    }))
  },
})

export default State.reducer

export const { resetPost, setPost } = State.actions
