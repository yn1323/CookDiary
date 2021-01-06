import React from 'react'
import TagList from 'src/component/template/Taglist'

const Tag = () => {
  return <TagList dispatch={(tag: number) => console.log(tag)} />
}

export default Tag
