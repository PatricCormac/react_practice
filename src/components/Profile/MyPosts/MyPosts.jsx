import React from 'react'
import c from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post likesCount={p.likes} message={p.postContent} />)

  return (
      <div className={c.myPosts}>
        <div className={c.inputBlock}>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <h2>My posts</h2>
        <p className={c.date}>{props.date}</p>
        
        { postsElements }
      </div>
  );
}

export default MyPosts