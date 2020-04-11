import React from 'react'
import c from './Post.module.css'

const Post = (props) => {
  return (
    <div className={c.item}>
      <img src="https://avatars0.githubusercontent.com/u/20645877?s=460&u=cfa16d4597ae1fcc07d3de8d17f27869203eb99e&v=4" />
      <p>{props.message}</p>
      <span>like {props.likesCount}</span>
    </div>
  );
}

export default Post