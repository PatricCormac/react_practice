import React from 'react'
import c from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://placehold.it/1000x200' alt='' />
      </div>
      <div className={c.descriptionBlock}>
        ava + descr
      </div>
    </div>
  );
}

export default ProfileInfo