import React from 'react'
import c from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id

  return (
    <li>
      <NavLink className={c.item} activeClassName={c.active} to={path}>{props.name}</NavLink>
    </li>
  )
}

const Message = (props) => {
  return (
    <div className={c.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  let dialogsData = [
    {id: 1, name: 'Oleg'},
    {id: 2, name: 'Petr'},
    {id: 3, name: 'Max'},
    {id: 4, name: 'Misha'},
    {id: 5, name: 'Nikita'},
    {id: 6, name: 'Tolya'}
  ]

  let elementsDialogs = [
    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />,
    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />,
    <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />,
    <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
  ]

  let messagesData = [
    {id: 1, message: 'hello'},
    {id: 2, message: 'hi'},
    {id: 3, message: 'how are you?'},
    {id: 4, message: 'I\'m fine'},
    {id: 5, message: 'I\'m happy for you'},
    {id: 6, message: 'Thanks'}
  ]

  let elementMessages = [
    <Message message={messagesData[0].message} />,
    <Message message={messagesData[1].message} />,
    <Message message={messagesData[2].message} />,
    <Message message={messagesData[3].message} />,
    <Message message={messagesData[4].message} />,
    <Message message={messagesData[5].message} />
  ]

  return (
    <div className={c.dialogs}>
      <nav className={c.items}>
        <ul>
          { elementsDialogs }
        </ul>
      </nav>
      <div className={c.messages}>
        { elementMessages }
      </div>
    </div>
  )
}

export default Dialogs