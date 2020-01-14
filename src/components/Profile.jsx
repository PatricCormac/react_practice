import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_86887171.jpg?crop=0,176,3032,1667&wid=4000&hei=2200&scl=0.758" />
      </div>
      <div>
        ava + description
        </div>
      <div>
        My post
          <div>
          New post
          </div>
        <div className={s.posts}>
          <div className={s.item}>
            Post 1
            </div>
          <div className={s.item}>
            Post 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;