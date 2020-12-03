import React from 'react'
import { Box } from '@material-ui/core'

import Card from 'src/component/organism/Card'

export default () => {
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
  return (
    <Box>
      {data.map(({ url, text, date }, i) => (
        <Card url={url} text={text} date={date} key={i} />
      ))}
    </Box>
  )
}
