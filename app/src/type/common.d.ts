import * as PreloadState from 'src/store'
import 'react-redux'

declare module 'react-redux' {
  // useSelectorなどを使いやすくするための設定
  interface DefaultRootState extends PreloadState {
    [key: string]: any
  }
  export function useDispatch<TDispatch = Dispatch<Actions>>(): TDispatch
  export function useStore<S = DefaultRootState>(): Store<S, Actions>
}
