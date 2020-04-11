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
  let dialogs = [
    {id: 1, name: 'Oleg'},
    {id: 2, name: 'Petr'},
    {id: 3, name: 'Max'},
    {id: 4, name: 'Misha'},
    {id: 5, name: 'Nikita'},
    {id: 6, name: 'Tolya'}
  ]

  let messages = [
    {id: 1, message: 'hello'},
    {id: 2, message: 'hi'},
    {id: 3, message: 'how are you?'},
    {id: 4, message: 'I\'m fine'},
    {id: 5, message: 'I\'m happy for you'},
    {id: 6, message: 'Thanks'}
  ]

  let elementsDialogs = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
  let elementMessages = messages.map(m => <Message message={m.message} />)

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