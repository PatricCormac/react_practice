import React from 'react'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'
import c from './Dialogs.module.css'
import {onInputMessageActionCreator, sendMessageActionCreator} from '../../redux/dialogs-reducer'

const Dialogs = (props) => {
  let state = props.store.getState().messagesPage

  let elementsDialogs = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />)
  let elementMessages = state.messages.map(m => <Message message={m.message} />)
  let newMessageText = state.newMessageText

  let sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator())
  }

  let onInputMessage = (e) => {
    let messageText = e.target.value
    props.store.dispatch(onInputMessageActionCreator(messageText))
  }

  return (
    <div className={c.dialogs}>
      <nav className={c.items}>
        <ul>
          { elementsDialogs }
        </ul>
      </nav>
      <div className={c.messages}>
        { elementMessages }
        <div className={c.inputBlock}>
          <textarea value={newMessageText} onChange={onInputMessage}></textarea>
          <button onClick={sendMessage}>send message</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs