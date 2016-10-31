import React from 'react'
import _ from 'lodash'
import TextField from '../commons/textField'
import searchFormStore from './searchFormStore'
import Select from 'react-select'

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

  changeTags = (value) => {
    this.setState({selectedTags: value})
  }

  changePersonality = (value) => {
    this.setState({selectedPersonality: value})
  }

  render() {
    let tagsOptions = _.map(this.state.tags, (tags) => {
      return {value: tags, label: tags}
    })

    let personalitiesOptions = _.map(this.state.personalities, (personality) => {
      return {value: personality, label: personality}
    })

    return(<div className='searchForm'>
      <TextField placeholder='Trick Name' onChange={this.changeValue} label='Trick Name' id='trickName'/>
      <Select multi simpleValue name='tags' value={this.state.selectedTags} options={tagsOptions} onChange={this.changeTags} placeholder='Type of trick'/>
      <Select simpleValue name='personality' value={this.state.selectedPersonality} options={personalitiesOptions} onChange={this.changePersonality} placeholder='Search by personality'/>
      <div className='control'>
        <button className='search' onClick={this.sendSearchAction}>search</button>
      </div>
    </div>)
  }
}

export default SearchForm
