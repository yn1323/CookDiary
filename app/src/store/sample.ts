import { createSlice } from '@reduxjs/toolkit'

export type SampleState = {
  id: string
}

export const empty: SampleState = {
  id: '',
}

export const createSample = (): SampleState => ({ id: 'sample' })

const initialState: SampleState = {
  ...empty,
}

const State = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    reset: () => ({ ...empty }),
    update: (state: SampleState, { payload }) => ({ ...state, ...payload }),
  },
})

export default State.reducer

export const { reset, update } = State.actions
