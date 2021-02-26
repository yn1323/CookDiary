import React from 'react'
import { Grid, Box, makeStyles } from '@material-ui/core'

import { useTranslation } from 'react-i18next'

import SimpleSpinner from 'src/component/atom/Spinner'
import Align from 'src/component/template/Align'
// import icon from 'src/asset/images/icon-48x48.png'
import { useCommonStyles } from 'src/constant'

export const History = () => {
  const commonClasses = useCommonStyles()
  return (
    <Align>
      <Box>
        <Grid container justify="center" spacing={5}>
          {/* <Grid item xs={12} className={commonClasses.center}>
            <img src={icon} />
          </Grid> */}
          <Grid item xs={12} className={commonClasses.center}>
            <SimpleSpinner />
          </Grid>
        </Grid>
      </Box>
    </Align>
  )
}

export default History
