import React, { useEffect, useRef, useState } from 'react'
import { Button, Grid, makeStyles, TextFieldProps } from '@material-ui/core'

import { RestaurantMenu } from '@material-ui/icons'

import CurrentDate from 'src/component/atom/CurrentDate'
import IconTextbox from 'src/component/molecule/IconTextbox'
import TagSelectButton from 'src/component/molecule/TagSelectButton'
import EditTextarea from 'src/component/molecule/EditTextarea'
import ImgUpload from 'src/component/molecule/ImgUpload'

import {
  createPost,
  useDialog,
  usePost,
  generateFirebaseId,
  getId,
  useImgUploading,
  useImage,
  createImage,
} from 'src/helper'
import { useHistory } from 'react-router-dom'
import { Post } from 'Store'
import SimpleSpinner from '../atom/Spinner'

const useStyles = makeStyles({
  dateWrapper: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  tagButton: {
    color: '#eee',
  },
  registerButton: {
    color: '#eee',
    height: 40,
    marginBottom: 30,
    fontSize: 20,
  },
})

const PostEditable = () => {
  const classes = useStyles()
  const history = useHistory()
  const spacing = 3
  const { setIsDialogOpen, setDialogComponent } = useDialog()
  const { post, updatePost } = usePost()
  const { initializeImgUploading } = useImgUploading()
  const { imageUrl } = useImage(post.id || '')

  const [currentPost, setCurrentPost] = useState(post)
  const [fbuid, _] = useState(generateFirebaseId())
  const [tmpImage, setTmpImage] = useState(null)
  const [imageUploading, setImageUploading] = useState(false)

  const imgPath = `/${getId()}/${currentPost.id || fbuid}`

  useEffect(() => {
    initializeImgUploading()
  }, [])

  useEffect(() => {
    setCurrentPost({ ...post })
  }, [post])

  const title: any = useRef<TextFieldProps>(null)
  const ingredient: any = useRef<TextFieldProps>(null)
  const step: any = useRef<TextFieldProps>(null)
  const tip: any = useRef<TextFieldProps>(null)

  const hasValidateValue = (payload: any, hasImage: any) => {
    let errMsg = ''
    if (!payload.title) {
      errMsg += '料理名が未入力です。\n'
    }
    if (!hasImage) {
      errMsg += '写真が選択されていません。\n'
    }
    setDialogComponent({
      title: 'エラー',
      component: <>{errMsg}</>,
    })
    return !!errMsg
  }

  const register = async () => {
    const payload: Post = {
      id: currentPost.id || fbuid,
      title: title?.current?.value || '',
      tag: currentPost.tag || 'etc',
      date: '',
      ingredients: ingredient.current?.value || '',
      steps: step.current?.value || '',
      tips: tip.current?.value || '',
    }
    if (hasValidateValue(payload, imageUrl || tmpImage)) {
      setIsDialogOpen(true)
      return
    }
    setImageUploading(true)
    if (tmpImage) {
      await createImage(tmpImage, imgPath)
    }

    if (currentPost.id) {
      updatePost(payload)
    } else {
      createPost(payload)
    }
    history.push('/')
  }

  return (
    <Grid container spacing={spacing}>
      <Grid item xs={12}>
        {/* タイトル */}
        <IconTextbox
          inputRef={title}
          defaultValue={currentPost.title}
          icon={<RestaurantMenu color="disabled" />}
          placeholder="料理名"
        ></IconTextbox>
      </Grid>
      <Grid item container xs={12} spacing={spacing} justify="space-between">
        <Grid item>
          {/* タグ選択 */}
          <TagSelectButton />
        </Grid>
        <Grid item>
          <div className={classes.dateWrapper}>
            {/* 日付 */}
            <CurrentDate />
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {/* 画像アップロード */}
        <ImgUpload
          imgUrl={imageUrl}
          tempImageSetter={(file: any) => setTmpImage(file)}
        />
      </Grid>
      <Grid item xs={12}>
        {/* 材料 */}
        <EditTextarea
          title="材料"
          defaultValue={currentPost.ingredients}
          inputRef={ingredient}
        />
      </Grid>
      <Grid item xs={12}>
        {/* 手順 */}
        <EditTextarea
          title="手順"
          defaultValue={currentPost.steps}
          inputRef={step}
        />
      </Grid>
      <Grid item xs={12}>
        {/* コツポ */}
        <EditTextarea
          title="コツ・ポイント"
          defaultValue={currentPost.tips}
          inputRef={tip}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          className={classes.registerButton}
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => register()}
          disabled={imageUploading}
        >
          {imageUploading ? <SimpleSpinner /> : <span>登録</span>}
        </Button>
      </Grid>
    </Grid>
  )
}

export default PostEditable
