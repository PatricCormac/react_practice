import React from 'react'
import c from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={c.nav}>
      <ul>
        <li>
          <a className={`${c.item} ${c.active}`} href='#s'>profile</a>
        </li>
        <li>
          <a className={c.item} href='#s'>messages</a>
        </li>
        <li>
          <a className={c.item} href='#s'>news</a>
        </li>
        <li>
          <a className={c.item} href='#s'>music</a>
        </li>
        <li>
          <a className={c.item} href='#s'>settings</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar