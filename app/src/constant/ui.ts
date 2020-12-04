import { makeStyles } from '@material-ui/core'

export const useCommonStyles: any = makeStyles({
  stickTop: {
    width: '100%',
    position: 'fixed',
    top: 0,
  },
  stickBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
  stickTopInTab: {
    width: '100%',
    position: 'fixed',
    top: 50,
  },
  stickBottomInTab: {
    width: '100%',
    position: 'fixed',
    bottom: 56,
  },
  alignRight: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cursorPointer: {
    cursor: 'pointer',
  },
})
