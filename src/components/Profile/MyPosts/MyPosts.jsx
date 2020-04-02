import React from 'react'
import c from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  return (
      <div className={c.myPosts}>
        <div className={c.inputBlock}>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <h2>My posts</h2>
        <p className={c.date}>{props.date}</p>
        <Post count='6' message='First post at social network' />
        <Post count='3' message='Second post at social network' />
      </div>
  )
}

export default MyPosts