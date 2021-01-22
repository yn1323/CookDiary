import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Button,
  IconButton,
  Grid,
  TextFieldProps,
  makeStyles,
  Typography,
} from '@material-ui/core'
import { Edit, Person, Save } from '@material-ui/icons'
import { updateUserId } from 'src/store/user'

import IconTextbox from 'src/component/molecule/IconTextbox'

import { State } from 'Store'
import { initializeList } from 'src/store/list'

const useStyles = makeStyles({
  tagButton: {
    color: '#eee',
  },
})

const Config = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state: State) => state)
  const styles = useStyles()
  const id = useRef<TextFieldProps>(null)
  const spacing = 3
  const [disableUserId, setDisableUserId] = useState(true)

  const registerId = () => {
    setDisableUserId(true)
    dispatch(updateUserId({ id: id.current?.value }))
    dispatch(initializeList())
  }

  return (
    <Grid container spacing={spacing}>
      <Grid item xs={10}>
        <IconTextbox
          defaultValue={user.id}
          inputRef={id}
          icon={<Person color="disabled" />}
          placeholder="ユーザーID"
          disabled={disableUserId}
        ></IconTextbox>
      </Grid>
      <Grid item xs={2}>
        <IconButton
          color="secondary"
          onClick={() => setDisableUserId(!disableUserId)}
        >
          <Edit />
        </IconButton>
      </Grid>
      {!disableUserId && (
        <Grid item xs={12}>
          <Button
            className={styles.tagButton}
            variant="contained"
            color="secondary"
            startIcon={<Save />}
            fullWidth
            onClick={() => registerId()}
          >
            IDを保存
          </Button>
        </Grid>
      )}
      <Grid item xs={12}>
        <Typography variant="caption">
          ※複数端末間で利用する場合、ユーザーIDを同じにすることでデータ共有が可能です。
          <br />
          ※ユーザーID変更前のデータの引き継ぎはできません。
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Config
