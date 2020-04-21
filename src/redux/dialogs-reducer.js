const INPUT_MESSAGE_TEXT = 'INPUT-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state, action) => {
  switch(action.type) {
    case INPUT_MESSAGE_TEXT:
      state.newMessageText = action.newMessageText
      return state
    case SEND_MESSAGE:
      let newMessage = state.newMessageText
      state.newMessageText = ''
      state.messages.push({id: 7, message: newMessage})
      return state
    default:
      return state
  }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const onInputMessageActionCreator = (messageText) => 
({type: INPUT_MESSAGE_TEXT, newMessageText: messageText})

export default dialogsReducer