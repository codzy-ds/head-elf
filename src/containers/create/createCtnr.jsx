import React from 'react'
import TextField from '../../components/commons/textField'
import searchFormStore from '../../components/search/searchFormStore'
import _ from 'lodash'
import Select from 'react-select'
import './styles.css'

class CreateTrick extends React.Component {

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

  handleSubmit = (event) => {
    console.log('submited!', event)
    event.preventDefault()
  }

  changeValue = (event) => {
    this.setState({title: event.target.value})
  }

  changeTags = (value) => {
    this.setState({selectedTags: value})
  }

  render() {
    let tagsOptions = _.map(this.state.tags, (tags) => {
      return {value: tags, label: tags}
    })

    return (<form className='create-trick-form' onSubmit={this.handleSubmit}>
      <TextField label='Titre'/>
      <span className='input input--nao'>
        <textarea placeholder='Description' cols='47' rows='10'/>
      </span>
      <TextField label='Images'/>
      <Select multi simpleValue autoBlur name='tags' value={this.state.selectedTags} options={tagsOptions} onChange={this.changeTags} placeholder='Type of trick'/>
      <div className='control'>
        <input type="submit" value="Create" className='xmasbutton'/>
      </div>
    </form>)
  }
}

export default CreateTrick
