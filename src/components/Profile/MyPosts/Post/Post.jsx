import React from 'react'
import c from './Post.module.css'

const Post = (props) => {
  return (
    <div className={c.item}>
      <img src="data:image/png;base64,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" alt='' />
      <p>{props.message}</p>
      <span>like {props.likesCount}</span>
    </div>
  )
}

export default Post