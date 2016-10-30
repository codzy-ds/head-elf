import React from 'react'
import trickStore from './randomTrickStore'
import { browserHistory } from 'react-router'
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

  handleSearchRedirect() {
    browserHistory.push('/search')
  }

  render() {
    let trick = this.state.trick;

    return (<div className="fortune-section">
      <h4>{trick.title}</h4>
      <p>{trick.description}</p>
      <div className="control">
        <div className="buttons">
          <button className="refresh" onClick={this.handleRefresh}><span className="arrow-refresh">&#x21bb;</span> Refresh</button>
          <button className="search" onClick={this.handleSearchRedirect}>Search</button>
        </div>
      </div>
    </div>)
  }
}

export default Fortune
