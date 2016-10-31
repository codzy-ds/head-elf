import React from 'react'
import _ from 'lodash'
import TextField from '../commons/textField'
import searchFormStore from './searchFormStore'

class SearchForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = searchFormStore.getModel()
  }

  sendSearchAction = () => {
    let syntheticEvent = {
      title: this.state.title
    }
    this.props.searchAction(syntheticEvent)
  }

  changeValue = (event) => {
    this.setState({title: event.target.value})
  }

  render() {
    let tagsOptions = _.map(this.state.tags, (tag) => {
      return (<option value={tag}>{tag}</option>)
    })
    console.log(this.state.personalities)
    let personalitiesOption = _.map(this.state.personalities, (personality) => {
      return (<option value={personality}>{personality}</option>)
    })
    return(<div>
      <TextField placeholder='Trick Name' onChange={this.changeValue} label='Trick Name' id='trickName'/>
      <select>{tagsOptions}</select>
      <select>{personalitiesOption}</select>
      <div className='control'>
        <button className='search' onClick={this.sendSearchAction}>search</button>
      </div>
    </div>)
  }
}

export default SearchForm
