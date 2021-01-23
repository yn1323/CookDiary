import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PostEditable from 'src/component/organism/PostEditable'
import { resetPost } from 'src/store/post'

const New = () => {
  const dispatch = useDispatch()
  // 初期化
  useEffect(() => {
    dispatch(resetPost())
  }, [])

  return <PostEditable />
}

export default New
