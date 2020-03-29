import React from 'react'
import c from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return (
    <div className={c.profile}>
      <div>
        <img src='https://placehold.it/1000x200'/>
      </div>
      <div>
        ava + descr
      </div>
      <MyPosts date='30.03.2020' />
    </div>
  )
}

export default Profile