import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getImage } from 'src/helper'
import { Image as StateType } from 'Store'

const STORE_NAME = 'image'

export const defaultVal: StateType = {
  isLoaded: false,
  result: {},
}

const initialState: StateType = {
  ...defaultVal,
}

export const fetchImageList = createAsyncThunk(
  `${STORE_NAME}/fetchImageList`,
  async () => getImage()
)

const State = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    initializeList: (_: StateType) => ({
      ...initialState,
    }),
  },
  extraReducers: ({ addCase }) => {
    addCase(fetchImageList.pending, () => ({ ...defaultVal })).addCase(
      fetchImageList.fulfilled,
      (_: StateType, { payload }: any) => ({
        isLoaded: true,
        result: { ...payload },
      })
    )
  },
})

export default State.reducer

export const { initializeList } = State.actions
