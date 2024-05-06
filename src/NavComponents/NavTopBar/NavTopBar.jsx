import React from 'react'
import "./NavTopBar.css"
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'

function NavTopBar() {
  return (
    <div>
    <nav>
      <ul class="menu">
        <li><Logo/></li>
        <li></li>
        <li></li>
        <li><Link to="/">Główna</Link></li>
        <li><Link to="/Matutra">Matutra</Link></li>
        <li>
          <a>Matura</a>
          <ul class="submenu">
          <li><Link to="/Algorytmy">Algorytmy</Link></li>
          <li><Link to="/Sortowania">Sortowania</Link></li>
          <li><Link to="/BazyDanych">Bazy Danych</Link></li>
          </ul>
          </li>
        <li><Link to="/CiekawyKalkulator">Ciekawy kalkulator</Link></li>
        <li><Link to="/Kontakt">Kontakt</Link></li>
      </ul>
    </nav>
    </div>
  )
}

export default NavTopBar
