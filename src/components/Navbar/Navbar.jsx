import React from 'react'
import c from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={c.nav}>
      <ul>
        <li>
          <NavLink className={c.item} activeClassName={c.active} to='/profile'>profile</NavLink>
        </li>
        <li>
          <NavLink className={c.item} activeClassName={c.active} to='/dialogs'>messages</NavLink>
        </li>
        <li>
          <NavLink className={c.item} activeClassName={c.active} to='/news'>news</NavLink>
        </li>
        <li>
          <NavLink className={c.item} activeClassName={c.active} to='/music'>music</NavLink>
        </li>
        <li>
          <NavLink className={c.item} activeClassName={c.active} to='/settings'>settings</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar