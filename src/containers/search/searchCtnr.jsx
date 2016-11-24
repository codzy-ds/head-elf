import React from 'react'
import SearchForm from '../../components/search/searchForm'
import searchTrickStore from './searchTrickStore'
import TrickList from '../../components/search/TrickList'
import { browserHistory } from 'react-router'
import './style.css'

class SearchWindow extends React.Component {

  constructor(props) {
    super(props)
    this.state = searchTrickStore.getModel()
  }

  componentDidMount() {
    this.unsubscribe = searchTrickStore.listen(this.onStatusChange.bind(this));
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  onStatusChange() {
    this.setState(searchTrickStore.getModel())
  }

  searchTricks = (event) => {
    searchTrickStore.getSearchTricks(event)
  }

  clickRow = (event) => {
    console.log('/details/',event.target.id)
  }

  render() {
    return (<div>
      <SearchForm searchAction={this.searchTricks} />
      <div className="divider">
     </div>
      <TrickList tricks={this.state.tricks} onClick={this.clickRow}/>
    </div>)
    }
  }

  export default SearchWindow
