import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CenterSpinner from 'src/component/molecule/CenterSpinner'
import PostEditable from 'src/component/organism/PostEditable'
import { usePost } from 'src/helper'

const Edit = () => {
  const { post, getPost } = usePost()
  const params: any = useParams()

  const isPostStateEmpty = post.id !== params?.id || ''

  useEffect(() => {
    // Edit -> New -> Editの導線
    if (isPostStateEmpty) {
      getPost(params.id)
    }
  }, [])

  return isPostStateEmpty ? <CenterSpinner /> : <PostEditable />
}

export default Edit
