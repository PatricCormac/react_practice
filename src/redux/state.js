const ADD_POST = 'ADD-POST'
const INPUT_POST_TEXT = 'INPUT-POST-TEXT'
const INPUT_MESSAGE_TEXT = 'INPUT-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, postContent: 'Installed Node.js', likes: 3},
        {id: 2, postContent: 'Installed create-react-app', likes: 5},
        {id: 3, postContent: 'Launched a project', likes: 8},
        {id: 4, postContent: 'Learning React', likes: 1},
      ],
      newPostText: ''
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
      newMessageText: ''
    },
  },
  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        postContent: this._state.profilePage.newPostText,
        likes: 0
      }
    
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } else if(action.type === INPUT_POST_TEXT) {
      this._state.profilePage.newPostText = action.newPostText
      this._callSubscriber(this._state)
    } else if (action.type === INPUT_MESSAGE_TEXT) {
      this._state.messagesPage.newMessageText = action.newMessageText
      this._callSubscriber(this._state)
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = this._state.messagesPage.newMessageText
      this._state.messagesPage.newMessageText = ''
      this._state.messagesPage.messages.push({id: 7, message: newMessage})
      this._callSubscriber(this._state)
    }
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const onInputTextActionCreator = (textPost) => 
({type: INPUT_POST_TEXT, newPostText: textPost})

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const onInputMessageActionCreator = (messageText) => 
({type: INPUT_MESSAGE_TEXT, newMessageText: messageText})

window.store = store

export default store