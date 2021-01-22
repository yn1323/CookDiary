import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@material-ui/core'

import DishCard from 'src/component/organism/DishCard'
import Filter from 'src/component/organism/Filter'
import { useHasSearchCondition } from 'src/helper'
import { fetchList } from 'src/store/list'
import { List as ListState, Search, State } from 'Store'
import CenterSpinner from 'src/component/molecule/CenterSpinner'

const List = () => {
  const dispatch = useDispatch()
  const { list = {} as ListState, search = {} as Search } = useSelector(
    (state: State) => state
  )
  const { isLoaded, result } = list

  useEffect(() => {
    dispatch(fetchList({ tag: search.tag }))
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
        .map(({ img, title, cookedDateList, id }) => (
          <DishCard
            img={img}
            title={title}
            date={cookedDateList[0]}
            id={id || ''}
            key={id}
          />
        ))}
      {!hasResult && (
        <div>
          料理が未登録です。
          <br />
          右上の+マークから新規料理を登録してください。
        </div>
      )}
    </Box>
  )
}

export default List
