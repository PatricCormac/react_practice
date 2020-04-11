import React from 'react'
import c from './DialogsItem.module.css'
import { NavLink } from 'react-router-dom'

const DialogsItem = (props) => {
  let path = '/dialogs/' + props.id

  return (
    <li>
      <NavLink className={c.item} activeClassName={c.active} to={path}>{props.name}</NavLink>
    </li>
  );
}

export default DialogsItem