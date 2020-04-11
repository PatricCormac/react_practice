let state = {
  profilePage: {
    posts: [
      {id: 1, postContent: 'Installed Node.js', likes: 3},
      {id: 2, postContent: 'Installed create-react-app', likes: 5},
      {id: 3, postContent: 'Launched a project', likes: 8},
      {id: 4, postContent: 'Learning React', likes: 1},
    ],
  },
  messagesPage: {
    dialogs: [
      {id: 1, name: 'Oleg'},
      {id: 2, name: 'Petr'},
      {id: 3, name: 'Max'},
      {id: 4, name: 'Misha'},
      {id: 5, name: 'Nikita'},
      {id: 6, name: 'Tolya'}
    ],
    messages: [
      {id: 1, message: 'hello'},
      {id: 2, message: 'hi'},
      {id: 3, message: 'how are you?'},
      {id: 4, message: 'I\'m fine'},
      {id: 5, message: 'I\'m happy for you'},
      {id: 6, message: 'Thanks'}
    ],
  },
}

export default state