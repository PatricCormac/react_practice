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
  return (
    <div className={c.dialogs}>
      <nav className={c.items}>
        <ul>
          <DialogItem name='User1' id='1' />
          <DialogItem name='User2' id='2' />
          <DialogItem name='User3' id='3' />
        </ul>
      </nav>
      <div className={c.messages}>
        <Message message='hi' />
        <Message message='hello' />
      </div>
    </div>
  )
}

export default Dialogs