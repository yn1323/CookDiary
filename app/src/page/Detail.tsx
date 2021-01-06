import React from 'react'
import {
  Button,
  Grid,
  makeStyles,
  TextFieldProps,
  Paper,
} from '@material-ui/core'
import { RestaurantMenu } from '@material-ui/icons'

import Date from 'src/component/atom/Date'
import RowTextarea from 'src/component/molecule/RowTextarea'
import ImgUpload from 'src/component/molecule/ImgUpload'
import TagButton from 'src/component/molecule/TagButton'
import PostImage from 'src/component/molecule/PostImage'
import PostTitle from 'src/component/atom/PostTitle'

const useStyles = makeStyles({
  dateWrapper: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  tagButton: {
    color: '#eee',
  },
})

const Detail = () => {
  const classes = useStyles()
  const spacing = 3
  return (
    <Grid container spacing={spacing}>
      <Grid item xs={12}>
        {/* タイトル */}
        <PostTitle displayTitle="トマトスープ" />
      </Grid>
      <Grid item container xs={12} spacing={spacing} justify="space-between">
        <Grid item>
          {/* タグ選択 */}
          <TagButton displayName="TEST" />
        </Grid>
        <Grid item>
          <div className={classes.dateWrapper}>
            {/* 日付 */}
            <Date displayDate="2020/01/01" />
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {/* 画像 */}
        <PostImage
          url={'https://material-ui.com/static/images/cards/paella.jpg'}
        />
      </Grid>
      <Grid item xs={12}>
        {/* 材料 */}
        <RowTextarea title="材料" val={'材料'} />
      </Grid>
      <Grid item xs={12}>
        {/* 手順 */}
        <RowTextarea title="手順" val={'手順'} />
      </Grid>
      <Grid item xs={12}>
        {/* コツポ */}
        <RowTextarea
          title="コツ・ポイント"
          val={
            'コツaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbaaaaaaaaaaaaaaaaaaaポ'
          }
        />
      </Grid>
    </Grid>
  )
}

export default Detail
