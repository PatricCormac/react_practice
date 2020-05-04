import React from 'react';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import c from './Dialogs.module.css';

const Dialogs = (props) => {
  let state = props.messagesPage;

  let elementsDialogs = state.dialogs.map(d => <DialogsItem name={d.name} key={d.id} id={d.id} />);
  let elementMessages = state.messages.map(m => <Message message={m.message} key={m.id} />);
  let newMessageText = state.newMessageText;

  let sendMessage = () => {
    props.sendMessage();
  }

  let onInputMessage = (e) => {
    let messageText = e.target.value;
    props.inputMessageText(messageText);
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

export default Dialogs;