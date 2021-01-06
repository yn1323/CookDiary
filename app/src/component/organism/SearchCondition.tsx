import React, { useState, useEffect, useRef } from 'react'
import {
  FormControl,
  FormHelperText,
  Input,
  Grid,
  TextField,
  Button,
  Divider,
  makeStyles,
} from '@material-ui/core'

import { Search } from '@material-ui/icons'
import { useDialog, useSearch } from 'src/helper'
import IconTextbox from 'src/component/molecule/IconTextbox'

const useStyles = makeStyles({
  divider: {
    marginTop: 20,
    marginBottom: 10,
  },
})
const SearchCondition = () => {
  const { setIsDialogOpen } = useDialog()
  const { keyword, setSearch } = useSearch()
  const [text, setText] = useState(keyword)
  const hoge = useRef('')
  const exec = () => {
    // setSearch({ keyword: text })
    setIsDialogOpen(false)
  }

  const classes = useStyles()
  return (
    <FormControl>
      {/* <IconTextbox
        inputRef={hoge}
        defaultVal={keyword}
        setter={setText}
        icon={<Search color="disabled" />}
      ></IconTextbox> */}
      <Divider className={classes.divider} />
      <Button variant="contained" color="primary" onClick={() => exec()}>
        実行
      </Button>
    </FormControl>
  )
}

export default SearchCondition
