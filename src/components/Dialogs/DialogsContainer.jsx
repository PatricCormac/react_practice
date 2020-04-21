import React from 'react';
import {onInputMessageActionCreator, sendMessageActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState().messagesPage;

  let sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  }

  let onInputMessage = (messageText) => {
    props.store.dispatch(onInputMessageActionCreator(messageText));
  }

  return <Dialogs
    inputMessageText={onInputMessage}
    sendMessage={sendMessage}
    messagesPage={state} />
}

export default DialogsContainer;