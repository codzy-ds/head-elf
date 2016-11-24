import React from 'react'
import {Link} from 'react-router'
import './styles.css'

const TopMenu = () => {

  return(
    <nav>
      <input type="checkbox" id="nav" /><label htmlFor="nav"></label>
      <ul>
        <li><Link to='/'>Accueil</Link></li>
        <li><Link to='/search'>Recherche</Link></li>
        <li><Link to='/create'>cr&eacute;er</Link></li>
        <li><Link to='/about'>&Agrave; propos</Link></li>
      </ul>
    </nav>)
  }

  export default TopMenu;
