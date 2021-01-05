import React, { useEffect, useRef } from 'react'
import { Button, Grid, makeStyles, TextFieldProps } from '@material-ui/core'
import { RestaurantMenu } from '@material-ui/icons'

import CurrentDate from 'src/component/atom/CurrentDate'
import IconTextbox from 'src/component/molecule/IconTextbox'
import TagSelectButton from 'src/component/molecule/TagSelectButton'
import EditTextarea from 'src/component/molecule/EditTextarea'
import ImgUpload from 'src/component/molecule/ImgUpload'

import { useDialog, usePost } from 'src/helper'
import { currentDate } from 'src/constant'
import { useHistory } from 'react-router-dom'

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

const Edit = () => {
  const classes = useStyles()
  const history = useHistory()
  const spacing = 3
  const { setIsDialogOpen, setDialogComponent } = useDialog()
  const { post, postDispatch, resetPost } = usePost()

  // 初期化
  useEffect(() => resetPost, [])

  const title = useRef<TextFieldProps>(null)
  const ingredient = useRef<TextFieldProps>(null)
  const step = useRef<TextFieldProps>(null)
  const tip = useRef<TextFieldProps>(null)

  const hasValidateValue = (payload: any) => {
    let errMsg = ''
    if (!payload.title) {
      errMsg += '料理名が未入力です。\n'
    }
    setDialogComponent({
      title: 'エラー',
      component: <>{errMsg}</>,
    })
    return !!errMsg
  }

  const register = () => {
    const payload = {
      title: title.current?.value,
      tag: post.tag || 'etc',
      date: currentDate,
      image: '',
      ingredient: ingredient.current?.value,
      step: step.current?.value,
      tip: tip.current?.value,
    }

    if (hasValidateValue(payload)) {
      setIsDialogOpen(true)
      return
    }
    postDispatch(payload)
    history.push('/')
  }

  return (
    <Grid container spacing={spacing}>
      <Grid item xs={12}>
        {/* タイトル */}
        <IconTextbox
          inputRef={title}
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
        <ImgUpload />
      </Grid>
      <Grid item xs={12}>
        {/* 材料 */}
        <EditTextarea title="材料" inputRef={ingredient} />
      </Grid>
      <Grid item xs={12}>
        {/* 手順 */}
        <EditTextarea title="手順" inputRef={step} />
      </Grid>
      <Grid item xs={12}>
        {/* コツポ */}
        <EditTextarea title="コツ・ポイント" inputRef={tip} />
      </Grid>
      <Grid item xs={12}>
        <Button
          className={classes.tagButton}
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => register()}
        >
          登録
        </Button>
      </Grid>
    </Grid>
  )
}

export default Edit
