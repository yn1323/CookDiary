import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import TagList from 'src/component/template/Taglist'
import { setSearch } from 'src/store/search'

const Tag = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const tagClickHandler = (label: string) => {
    dispatch(setSearch({ tag: label }))
    history.push('/')
  }
  return <TagList dispatch={(label: string) => tagClickHandler(label)} />
}

export default Tag
