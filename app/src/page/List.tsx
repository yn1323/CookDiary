import React from 'react'
import { Box } from '@material-ui/core'

import DishCard from 'src/component/organism/DishCard'
import Filter from 'src/component/organism/Filter'
import { useHasSearchCondition } from 'src/helper'

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
