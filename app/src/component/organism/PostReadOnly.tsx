import React, { useEffect } from 'react'
import { Grid, makeStyles } from '@material-ui/core'

import Date from 'src/component/atom/Date'
import RowTextarea from 'src/component/molecule/RowTextarea'
import TagButton from 'src/component/molecule/TagButton'
import PostImage from 'src/component/molecule/PostImage'
import PostTitle from 'src/component/atom/PostTitle'
import CenterSpinner from 'src/component/molecule/CenterSpinner'

import { useImage, usePost } from 'src/helper'

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

export const PostReadOnly = () => {
  const { post } = usePost()
  const { id, title, tag, date, ingredients, steps, tips } = post
  const { imageUrl } = useImage(id || '')

  const classes = useStyles()
  const spacing = 3
  return (
    <Grid container spacing={spacing}>
      <Grid item xs={12}>
        {/* タイトル */}
        <PostTitle displayTitle={title} />
      </Grid>
      <Grid item container xs={12} spacing={spacing} justify="space-between">
        <Grid item>
          {/* タグ選択 */}
          <TagButton displayName={tag} />
        </Grid>
        <Grid item>
          <div className={classes.dateWrapper}>
            {/* 日付 */}
            <Date displayDate={date} />
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {/* 画像 */}
        <PostImage url={imageUrl} />
      </Grid>
      {ingredients && (
        <Grid item xs={12}>
          <hr />
          {/* 材料 */}
          <RowTextarea title="材料" val={ingredients} />
        </Grid>
      )}
      {steps && (
        <Grid item xs={12}>
          <hr />
          {/* 手順 */}
          <RowTextarea title="手順" val={steps} />
        </Grid>
      )}
      {tips && (
        <Grid item xs={12}>
          <hr />
          {/* コツポ */}
          <RowTextarea title="コツ・ポイント" val={tips} />
        </Grid>
      )}
    </Grid>
  )
}

export default PostReadOnly
