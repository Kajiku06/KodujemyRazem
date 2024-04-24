import React from 'react'
import "./NavTopBar.css"
import Logo from '../Logo/Logo'

function NavTopBar() {
  return (
    <div>
    <nav>
      <ul class="menu">
        <li><Logo/></li>
        <li>       </li>
        <li>       </li>
        <li><a>Główna</a></li>
        <li><a>Matutra</a></li>
        <li>
          <a>Matura</a>
          <ul class="submenu">
            <li><a>Algorytmy</a></li>
            <li><a>Sortowania</a></li>
            <li><a>Bazy Danych</a></li>
          </ul>
        </li>
        <li><a>Ciekawy kalkulator</a></li>
        <li><a>Kontakt</a></li>
      </ul>
    </nav>
    </div>
  )
}

export default NavTopBar
