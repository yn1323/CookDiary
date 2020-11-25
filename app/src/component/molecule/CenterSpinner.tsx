import React from 'react'
import { Box } from '@material-ui/core'
import Spinner from 'src/component/atom/Spinner'
import Centering from 'src/component/template/Centering'
interface Props {
  text?: string
}
export default ({ text = '' }: Props) => {
  return (
    <Centering direction="column">
      <>
        <Box>
          <Spinner />
        </Box>
        <Box mt={3}>{text ?? <div>{text}</div>}</Box>
      </>
    </Centering>
  )
}
