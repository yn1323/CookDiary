import React from 'react'
import { Box } from '@material-ui/core'
import Spinner from 'src/component/atom/Spinner'
import Align from 'src/component/template/Align'
interface Props {
  text?: string
}
export const CenterSpinner = ({ text = '' }: Props) => {
  return (
    <Align direction="column">
      <>
        <Box>
          <Spinner />
        </Box>
        <Box mt={3}>{text ?? <div>{text}</div>}</Box>
      </>
    </Align>
  )
}

export default CenterSpinner
