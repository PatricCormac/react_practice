import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";

class Users extends React.Component {
  constructor(props) {
    super(props);

    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  getUsers = () => {};

  render() {
    return (
      <div className={styles.users}>
        {this.props.users.map((u) => (
          <div key={u.id} className={styles.userItem}>
            <div className={styles.avatarBlock}>
              <img
                src={
                  u.photos.small != null
                    ? u.photos.small
                    : "https://placehold.it/60x60"
                }
                className={styles.avatar}
              />
              {u.followed ? (
                <button
                  onClick={() => {
                    this.props.unfollow(u.id);
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.follow(u.id);
                  }}
                >
                  follow
                </button>
              )}
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
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
