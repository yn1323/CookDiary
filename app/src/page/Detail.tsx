import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core'

import PostReadOnly from 'src/component/organism/PostReadOnly'
import CenterSpinner from 'src/component/molecule/CenterSpinner'

import { List, State } from 'Store'

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
  const { isExist } = usePost()

  useEffect(() => {
    const targetPost = list.result.find(post => post.id === id)
    if (targetPost) {
      dispatch(setPost(targetPost))
    } else {
      dispatch(fetchPost(id))
    }
  }, [])

  return isExist ? <PostReadOnly /> : <CenterSpinner />
}

export default Detail
