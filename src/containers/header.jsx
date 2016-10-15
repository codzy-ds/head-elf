import React from 'react'

const Header = () => {
  return (<div className="App-header">
    {<ul id="bauble-container">
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
    </ul>}
  </div>)
}

export default Header
