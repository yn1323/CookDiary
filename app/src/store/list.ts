import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getList } from 'src/helper'
import { List as StateType } from 'Store'

const STORE_NAME = 'list'

export const defaultVal: StateType = {
  isLoaded: false,
  result: [],
}

const initialState: StateType = {
  ...defaultVal,
}

export const fetchList = createAsyncThunk(`${STORE_NAME}/fetchList`, async () =>
  getList()
)

const State = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {},
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

// export const { reset, setSearch } = State.actions
