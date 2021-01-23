import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography } from '@material-ui/core'

import DishCard from 'src/component/organism/DishCard'
import Filter from 'src/component/organism/Filter'
import CenterSpinner from 'src/component/molecule/CenterSpinner'

import { useHasSearchCondition } from 'src/helper'

import { fetchList } from 'src/store/list'
import { fetchImageList } from 'src/store/image'

import { List as ListState, Search, State } from 'Store'

const List = () => {
  const dispatch = useDispatch()
  const { list = {} as ListState, search = {} as Search } = useSelector(
    (state: State) => state
  )
  const { isLoaded, result } = list

  useEffect(() => {
    dispatch(fetchList({ tag: search.tag }))
    dispatch(fetchImageList())
  }, [search])

  const hasCondition = useHasSearchCondition()
  const hasResult = !!result.filter(r => r.id).length

  if (!isLoaded) {
    return <CenterSpinner />
  }

  return (
    <Box>
      {hasCondition && <Filter />}
      {result
        .filter(r => r.id)
        .map(({ title, cookedDateList, id }) => (
          <DishCard
            title={title}
            date={cookedDateList[0]}
            id={id || ''}
            key={id}
          />
        ))}
      {!hasResult && (
        <Typography variant="caption">
          料理がありません。
          <br />
          右上の+マークから新規料理を登録してください。
        </Typography>
      )}
    </Box>
  )
}

export default List
