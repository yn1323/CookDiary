import { makeStyles } from '@material-ui/core'

const styles: any = {
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
  center: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ellipsis: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  width100: {
    width: '100%',
  },
  height100: {
    height: '100%',
  },
}

const custom: any = {
  centerV: {
    ...styles.center,
    flexDirection: 'column',
  },
  centerVH: {
    ...styles.center,
    alignItems: 'center',
  },
  alignLeft: {
    ...styles.alignRight,
    justifyContent: 'flex-start',
  },
}

export const useCommonStyles: any = makeStyles({ ...styles, ...custom })
