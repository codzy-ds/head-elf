import React from 'react'
import _ from 'lodash'
import TextField from '../commons/textField'
import searchFormStore from './searchFormStore'
import Select from 'react-select'
import TrickTags from '../tags/TricksTags'

class SearchForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = searchFormStore.getModel()
  }

  componentDidMount() {
    this.unsubscribe = searchFormStore.listen(this.onStatusChange.bind(this));
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  onStatusChange() {
    this.setState(searchFormStore.getModel())
  }

  sendSearchAction = () => {
    let syntheticEvent = {
      title: this.state.title,
      personality: this.state.selectedPersonality,
      tags: this.state.selectedTags
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
    let personalitiesOptions = _.map(this.state.personalities, (personality) => {
      return {value: personality, label: personality}
    })

    return(<div className='searchForm'>
      <TextField placeholder='Nom du tour' onChange={this.changeValue} label='Nom du tour' id='trickName'/>
      <TrickTags changeTags={this.changeTags} />
      <Select simpleValue autoBlur name='personality' value={this.state.selectedPersonality} options={personalitiesOptions} onChange={this.changePersonality} placeholder='Personalit&eacute; du Lutin'/>
      <div className='control'>
        <button className='xmasbutton' onClick={this.sendSearchAction}>Rechercher</button>
      </div>
    </div>)
  }
}

export default SearchForm
