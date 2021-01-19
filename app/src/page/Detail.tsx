import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, makeStyles } from '@material-ui/core'
import { RestaurantMenu } from '@material-ui/icons'

import Date from 'src/component/atom/Date'
import RowTextarea from 'src/component/molecule/RowTextarea'
import ImgUpload from 'src/component/molecule/ImgUpload'
import TagButton from 'src/component/molecule/TagButton'
import PostImage from 'src/component/molecule/PostImage'
import PostTitle from 'src/component/atom/PostTitle'
import CenterSpinner from 'src/component/molecule/CenterSpinner'

import { List, Post, State } from 'Store'
import { fetchPost, setPost } from 'src/store/post'
import { usePost } from 'src/helper'

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
  const dispatch = useDispatch()
  const { id }: any = useParams()
  const { list = {} as List } = useSelector((state: State) => state)
  const { post, isExist } = usePost()
  const { title, tag, cookedDateList, ingredients, steps, tips, img } = post

  useEffect(() => {
    const targetPost = list.result.find(post => post.id === id)
    if (targetPost) {
      dispatch(setPost(targetPost))
    } else {
      dispatch(fetchPost(id))
    }
  }, [])

  const classes = useStyles()
  const spacing = 3

  if (!isExist) {
    return <CenterSpinner />
  }
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
            <Date displayDate={cookedDateList[0]} />
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {/* 画像 */}
        <PostImage
          url={'https://material-ui.com/static/images/cards/paella.jpg'}
        />
      </Grid>
      {ingredients && (
        <Grid item xs={12}>
          {/* 材料 */}
          <RowTextarea title="材料" val={ingredients} />
        </Grid>
      )}
      {steps && (
        <Grid item xs={12}>
          {/* 手順 */}
          <RowTextarea title="手順" val={steps} />
        </Grid>
      )}
      {tips && (
        <Grid item xs={12}>
          {/* コツポ */}
          <RowTextarea title="コツ・ポイント" val={tips} />
        </Grid>
      )}
    </Grid>
  )
}

export default Detail
