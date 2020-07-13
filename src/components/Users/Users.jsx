import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';

let Users = (props) => {

  let getUsers = () => {
    if (props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          props.setUsers(response.data.items);
        }
      );
    }
  }

  return <div className={styles.users}>
    <button onClick={getUsers}>Get Users</button>
    {
      props.users.map(u => <div key={u.id} className={styles.userItem}>
        <div className={styles.avatarBlock}>
          <img src={ u.photos.small != null ? u.photos.small : "https://placehold.it/60x60"} className={styles.avatar} />
          { u.followed
            ? <button onClick={() => {props.unfollow(u.id)}}>unfollow</button>
            : <button onClick={() => {props.follow(u.id)}}>follow</button>}
        </div>
        <div className={styles.userInfo}>
          <div>
            <p>{u.name}</p>
            <p>{u.status}</p>
          </div>
          <div className={styles.location}>
            <p>{"u.location.country"}</p>
            <p>{"u.location.city"}</p>
          </div>
        </div>
      </div>)
    }
  </div>
}

export default Users;