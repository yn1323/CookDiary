import * as PreloadState from 'src/store'
import 'react-redux'

declare module 'react-redux' {
  interface DefaultRootState extends PreloadState {
    [key: string]: any
  }
  export function useDispatch<TDispatch = Dispatch<Actions>>(): TDispatch
  export function useStore<S = DefaultRootState>(): Store<S, Actions>
}

export interface State extends PreloadState {
  [key: string]: any
}
export type SelectionState = PreloadState.SelectionState
