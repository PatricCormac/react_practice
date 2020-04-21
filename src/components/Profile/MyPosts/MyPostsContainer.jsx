import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator, onInputTextActionCreator} from '../../../redux/profile-reducer';

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onInputText = (textPost) => {
    let action = onInputTextActionCreator(textPost);
    props.store.dispatch(action);
  }

  return <MyPosts
    addPost={addPost}
    inputPostText={onInputText}
    posts={state.profilePage.posts}
    newPostText={state.profilePage.newPostText} />
}

export default MyPostsContainer;