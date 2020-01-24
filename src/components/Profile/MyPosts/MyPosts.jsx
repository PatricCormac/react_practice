import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div className={s.posts}>
        <Post message='Hi!' likes='7' />
        <Post message='How are you?' likes='14' />
      </div>
    </div>
  );
}

export default MyPosts;