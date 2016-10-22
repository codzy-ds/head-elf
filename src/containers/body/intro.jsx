import React from 'react'
import infoStore from './infoStore'

class Intro extends React.Component {
  constructor(props) {
    super(props)
    this.state = infoStore.getModel()
  }

  componentDidMount() {
    this.unsubscribe = infoStore.listen(this.onStatusChange.bind(this));
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  onStatusChange() {
    this.setState(infoStore.getModel())
  }

  render() {
    let info = this.state
    return (<p>{info.info}</p>)
  }
}

export default Intro
