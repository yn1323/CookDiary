import React from 'react'
import { useDispatch } from 'react-redux'
import { Box, makeStyles, Typography } from '@material-ui/core'
import {
  Search,
  DateRange,
  LocalOffer,
  Label,
  Cancel,
} from '@material-ui/icons'
import { delSearch } from 'src/store/search'
import { tags, useCommonStyles } from 'src/constant'
import { tagNumToStr, useSearchCondition } from 'src/helper'

const useStyles = makeStyles({
  root: {
    height: 40,
    wdith: '100%',
  },
  wrap: {
    display: 'flex',
    textTransform: 'none',
  },
  condition: {
    minWidth: '33%',
    maxWidth: '50%',
  },
  closeIcon: {
    fontSize: 15,
    marginLeft: 15,
  },
})

export const Filter = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const commonCl = useCommonStyles()
  const { keyword, dateRange, tag } = useSearchCondition()

  const conditions = [
    // { label: keyword || '指定なし', icon: <Search color="disabled" /> },
    // { label: dateRange || '指定なし', icon: <DateRange color="disabled" /> },
    {
      label: tag || '指定なし',
      icon: <LocalOffer color="secondary" />,
      target: 'tag',
    },
  ]

  const deleteCondition = (target: string) => {
    dispatch(delSearch(target))
  }

  const renderConditions = () =>
    conditions.map(({ label, icon, target }, key) => (
      <Box
        className={`${classes.condition} ${commonCl.centerVH}`}
        key={key}
        onClick={() => deleteCondition(target)}
      >
        {icon}
        <Typography noWrap color="secondary">
          {label}
        </Typography>
        <Cancel color="disabled" className={classes.closeIcon} />
      </Box>
    ))
  return (
    <Box
      className={`${classes.root} ${commonCl.centerV} ${commonCl.cursorPointer}`}
    >
      <Box className={`${classes.wrap} ${commonCl.alignRight}`}>
        {renderConditions()}
      </Box>
    </Box>
  )
}

export default Filter
