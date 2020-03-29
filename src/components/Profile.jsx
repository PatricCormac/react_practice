import React from 'react'
import c from './Profile.module.css'

const Profile = () => {
  return (
    <div className={c.profile}>
      <div>
        <img src='https://placehold.it/1000x200'/>
      </div>
      <div>
        ava + descr
      </div>
      <div>
        my posts
        <div>
          new post
        </div>
        <div>
          <div className={c.item}>post 1</div>
          <div className={c.item}>post 2</div>
        </div>
      </div>
    </div>
  )
}

export default Profile