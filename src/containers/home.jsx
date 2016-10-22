import React from 'react'
import Fortune from './fortune/fortuneCtnr'
import Intro from './body/intro'
import ChristmasTree from '../components/christmasTree'
 // className="content"
const Home = () => {
  return(<div className="content">
    <div className="side-bar">
      <ChristmasTree />
    </div>
    <div className="main">
      <Fortune />
      <Intro />
    </div>
  </div>)
}

export default Home
