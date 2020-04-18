import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import c from './Profile.module.css'

const Profile = (props) => {

  return (
    <div className={c.profile}>
      <ProfileInfo />
      <MyPosts 
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
        date='30.03.2020' />
    </div>
  );
}

export default Profile