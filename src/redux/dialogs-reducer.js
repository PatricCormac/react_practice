const INPUT_MESSAGE_TEXT = 'INPUT-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
  newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
  switch(action.type) {
    case INPUT_MESSAGE_TEXT:
      state.newMessageText = action.newMessageText;
      return state;
    case SEND_MESSAGE:
      let newMessage = state.newMessageText;
      state.newMessageText = '';
      state.messages.push({id: 7, message: newMessage});
      return state;
    default:
      return state;
  }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const onInputMessageActionCreator = (messageText) => 
({type: INPUT_MESSAGE_TEXT, newMessageText: messageText});

export default dialogsReducer;