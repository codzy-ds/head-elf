import React from 'react'
import './styles.css'

class ChristmasTree extends React.Component {
  render() {
    return (<div className="ctree">
      <div className="trunk"></div>
      <div className="branches bottom"><div className="band"></div></div>
      <div className="branches middle"><div className="band"></div></div>
      <div className="branches top"><div className="band"></div></div>
      <div className="star"></div>
      <div className="boule-rouge1"></div>
      <div className="boule-rouge2"></div>
      <div className="boule-bleue1"></div>
      <div className="boule-bleue2"></div>
      <div className="boule-argent1"></div>
      <div className="boule-argent2"></div>
    </div>
)
  }
}

export default ChristmasTree
