import React from 'react'
import c from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  return (
      <div>
        <p>{props.date}</p>
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <Post count='6' message='First post at social network' />
        <Post count='3' message='Second post at social network' />
      </div>
  )
}

export default MyPosts