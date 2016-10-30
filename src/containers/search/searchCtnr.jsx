import React from 'react'
import SearchForm from '../../components/search/searchForm'
import searchTrickStore from './searchTrickStore'
import TrickList from '../../components/search/TrickList'

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
    console.log('111111111111111111111111111')
    searchTrickStore.getSearchTricks(event)
  }

  clickRow = (event) => {
    console.log('truc')
  }

  render() {
    return (<div>
      <SearchForm searchAction={this.searchTricks} />
      <div>_</div>
      <TrickList tricks={this.state.tricks} onClick={this.clickRow}/>
    </div>)
    }
  }

  export default SearchWindow
