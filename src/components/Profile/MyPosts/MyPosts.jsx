import React from 'react'
import c from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post likesCount={p.likes} message={p.postContent} />)
  
  let newPost = React.createRef()

  let addPost = () => {
    props.addPost()
  }

  let onInputText = () => {
    let textPost = newPost.current.value
    props.inputPostText(textPost)
  }

  return (
    <div className={c.myPosts}>
      <div className={c.inputBlock}>
        <textarea ref={newPost} onChange={onInputText} value={props.newPostText} />
        <button onClick={addPost}>Add post</button>
      </div>
      <h2>My posts</h2>
      <p className={c.date}>{props.date}</p>
      { postsElements }
    </div>
  );
}

export default MyPosts