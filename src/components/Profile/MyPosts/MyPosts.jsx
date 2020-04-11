import React from 'react'
import c from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let posts = [
    {id: 1, postContent: 'Installed Node.js', likes: 3},
    {id: 2, postContent: 'Installed create-react-app', likes: 5},
    {id: 3, postContent: 'Launched a project', likes: 8},
    {id: 4, postContent: 'Learning React', likes: 1},
  ]

  let postsElements = posts.map(p => <Post likesCount={p.likes} message={p.postContent} />)

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
  )
}

export default MyPosts