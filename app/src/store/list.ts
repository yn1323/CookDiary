import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getList } from 'src/helper'
import { List as StateType } from 'Store'
import { FetchList } from 'Request'

const STORE_NAME = 'list'

export const defaultVal: StateType = {
  isLoaded: false,
  result: [],
}

const initialState: StateType = {
  ...defaultVal,
}

export const fetchList = createAsyncThunk(
  `${STORE_NAME}/fetchList`,
  async (searchObj: FetchList) => getList(searchObj)
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
    addCase(fetchList.pending, () => ({ ...initialState })).addCase(
      fetchList.fulfilled,
      (state: StateType, { payload }: any) => {
        state.isLoaded = true
        state.result = [...payload]
      }
    )
  },
})

export default State.reducer

export const { initializeList } = State.actions
