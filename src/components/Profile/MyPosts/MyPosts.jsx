import React from 'react'
import c from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let postsData = [
    {id: 1, postContent: 'Installed Node.js', likes: 3},
    {id: 2, postContent: 'Installed create-react-app', likes: 5},
    {id: 3, postContent: 'Launched a project', likes: 8},
    {id: 4, postContent: 'Learning React', likes: 1},
  ]

  return (
      <div className={c.myPosts}>
        <div className={c.inputBlock}>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <h2>My posts</h2>
        <p className={c.date}>{props.date}</p>
        <Post likesCount={postsData[0].likes} message={postsData[0].postContent} />
        <Post likesCount={postsData[1].likes} message={postsData[1].postContent} />
        <Post likesCount={postsData[2].likes} message={postsData[2].postContent} />
        <Post likesCount={postsData[3].likes} message={postsData[3].postContent} />
      </div>
  )
}

export default MyPosts