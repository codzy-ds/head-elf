import React from 'react'
import trickStore from './randomTrickStore'
import './styles.css'

class Fortune extends React.Component {

  constructor(props) {
    super(props)
    this.state = trickStore.getModel()
  }

  componentDidMount() {
    this.unsubscribe = trickStore.listen(this.onStatusChange.bind(this));
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  onStatusChange() {
    this.setState(trickStore.getModel())
  }

  handleRefresh() {
    trickStore.getRandomTrick()
  }

  render() {
    let trick = this.state.trick;

    return (<div className="fortune-section">
      <h4>{trick.title}</h4>
      <p>{trick.description}</p>
      <div className="control">
        <button className="refresh" onClick={this.handleRefresh}>Refresh</button>
        <button className="search">Search</button>
      </div>
    </div>)
  }
}

export default Fortune
