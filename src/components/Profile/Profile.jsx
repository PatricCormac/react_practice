import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import c from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {

  return (
    <div className={c.profile}>
      <ProfileInfo />
      <MyPostsContainer
        date='30.03.2020' />
    </div>
  );
}

export default Profile