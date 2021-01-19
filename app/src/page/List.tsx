import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@material-ui/core'

import DishCard from 'src/component/organism/DishCard'
import Filter from 'src/component/organism/Filter'
import { getList, useFirestore, useHasSearchCondition } from 'src/helper'
import { fetchList } from 'src/store/list'
import { List as ListState, State } from 'Store'
import CenterSpinner from 'src/component/molecule/CenterSpinner'

const List = () => {
  const dispatch = useDispatch()
  const { list = {} as ListState } = useSelector((state: State) => state)
  const { isLoaded, result } = list

  useEffect(() => {
    dispatch(fetchList())
  }, [])

  // const hasCondition = useHasSearchCondition()

  if (!isLoaded) {
    return <CenterSpinner />
  }

  return (
    <Box>
      {/* {hasCondition && <Filter />} */}
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
    </Box>
  )
}

export default List
