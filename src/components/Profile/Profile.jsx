import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_86887171.jpg?crop=0,176,3032,1667&wid=4000&hei=2200&scl=0.758" />
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;