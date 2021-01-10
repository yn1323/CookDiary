import React from 'react'
import { useSelector } from 'react-redux'
import { Box } from '@material-ui/core'

import DishCard from 'src/component/organism/DishCard'
import Filter from 'src/component/organism/Filter'
import { useFirestore, useHasSearchCondition } from 'src/helper'
import { fetchList } from 'src/store/list'
import { List as ListState, State } from 'Store'

const List = () => {
  const data = [
    {
      url: 'https://material-ui.com/static/images/cards/paella.jpg',
      text: 'トマト煮込み',
      date: '2020-11-05',
    },
  ]
  for (let i = 0; i < 10; i++) {
    data.push({ ...data[0] })
  }

  const { list = {} as ListState } = useSelector((state: State) => state)
  useFirestore({ action: fetchList })

  const hasCondition = useHasSearchCondition()
  return (
    <Box>
      {hasCondition && <Filter />}
      {data.map(({ url, text, date }, i) => (
        <DishCard url={url} text={text} date={date} key={i} />
      ))}
    </Box>
  )
}

export default List
