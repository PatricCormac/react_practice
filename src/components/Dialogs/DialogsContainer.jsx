import React from 'react';
import {onInputMessageActionCreator, sendMessageActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
  return(
    <StoreContext.Consumer>{
      (store) => {
        let state = store.getState().messagesPage;

        let sendMessage = () => {
          store.dispatch(sendMessageActionCreator());
        }

        let onInputMessage = (messageText) => {
          store.dispatch(onInputMessageActionCreator(messageText));
        }

        return <Dialogs
          inputMessageText={onInputMessage}
          sendMessage={sendMessage}
          messagesPage={state} />
      }
    }
    </StoreContext.Consumer>
  );
}

export default DialogsContainer;