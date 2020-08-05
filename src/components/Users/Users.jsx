import React from "react";
import styles from "./Users.module.css";

class Users extends React.Component {
  componentDidMount() {
    this.props.setUsers([
      {
        name: "VladPatsiuk",
        id: 9710,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: false,
      },
      {
        name: "Ilia_ov",
        id: 9709,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: false,
      },
      {
        name: "Rovel8",
        id: 9708,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: false,
      },
      {
        name: "samo_dur_andre",
        id: 9707,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: false,
      },
      {
        name: "Natalka77712",
        id: 9706,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: false,
      },
      {
        name: "bakhtiyarrem",
        id: 9705,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: false,
      },
      {
        name: "Melon",
        id: 9704,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: false,
      },
      {
        name: "moiz23",
        id: 9703,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: false,
      },
      {
        name: "moiz",
        id: 9702,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: false,
      },
      {
        name: "is_bubux_c",
        id: 9701,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: false,
      },
    ]);
  }

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
