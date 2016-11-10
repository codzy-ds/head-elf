import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (<div className="App-header">
  <ul id="bauble-container">
    <li>
      <div className="bauble red-bauble"></div>
    </li>
    <li>
      <div className="bauble blue-bauble"></div>
    </li>
    <li>
      <div className="bauble yellow-bauble"></div>
    </li>
    <li>
      <div className="bauble green-bauble"></div>
    </li>
  </ul>
  <div id="ctrlBtns"><Link to='/' id='go-home-btn'>home</Link></div>
</div>)
}

export default Header
