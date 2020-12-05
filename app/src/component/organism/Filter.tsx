import React from 'react'
import { Box, Button, makeStyles, Typography } from '@material-ui/core'
import { Search, DateRange, LocalOffer, Label } from '@material-ui/icons'

import { useCommonStyles } from 'src/constant'
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
})

export const Filter = () => {
  const classes = useStyles()
  const commonCl = useCommonStyles()
  const { keyword, dateRange, tag } = useSearchCondition()
  const tagLabel = tagNumToStr(tag)

  const conditions = [
    { label: keyword || '指定なし', icon: <Search color="disabled" /> },
    { label: dateRange || '指定なし', icon: <DateRange color="disabled" /> },
    { label: tagLabel || '指定なし', icon: <LocalOffer color="disabled" /> },
  ]

  const renderConditions = () =>
    conditions.map(({ label, icon }, key) => (
      <Box className={`${classes.condition} ${commonCl.centerVH}`} key={key}>
        {icon}
        <Typography noWrap color="textSecondary">
          {label}
        </Typography>
      </Box>
    ))
  return (
    <Box
      className={`${classes.root} ${commonCl.centerV} ${commonCl.cursorPointer}`}
    >
      <Box className={classes.wrap}>{renderConditions()}</Box>
    </Box>
  )
}

export default Filter
