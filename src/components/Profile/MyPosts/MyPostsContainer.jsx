import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator, onInputTextActionCreator} from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>{
      (store) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        }

        let onInputText = (textPost) => {
          let action = onInputTextActionCreator(textPost);
          store.dispatch(action);
        }

        return <MyPosts
        addPost={addPost}
        inputPostText={onInputText}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText} />
      }
    }
    </StoreContext.Consumer>
  );
}

export default MyPostsContainer;