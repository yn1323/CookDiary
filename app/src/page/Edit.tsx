import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import CenterSpinner from 'src/component/molecule/CenterSpinner'
import PostEditable from 'src/component/organism/PostEditable'
import { usePost } from 'src/helper'
import { fetchImageList } from 'src/store/image'

const Edit = () => {
  const dispatch = useDispatch()
  const { post, getPost } = usePost()
  const params: any = useParams()

  const isPostStateEmpty = post.id !== params?.id || ''

  useEffect(() => {
    // Edit -> New -> Editの導線
    if (isPostStateEmpty) {
      getPost(params.id)
      dispatch(fetchImageList())
    }
  }, [])

  return isPostStateEmpty ? <CenterSpinner /> : <PostEditable />
}

export default Edit
