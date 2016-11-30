import React from 'react'
import TextField from '../../components/commons/textField'
import createTrickStore from './createStore'
import _ from 'lodash'
import './styles.css'
import TricksTags from '../../components/tags/TricksTags'

class CreateTrick extends React.Component {

  constructor(props) {
    super(props)
    this.state = createTrickStore.getModel()
  }

  componentDidMount() {
    this.unsubscribe = createTrickStore.listen(this.onStatusChange.bind(this));
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  onStatusChange() {
    this.setState(createTrickStore.getModel())
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
    return (<form className='create-trick-form' onSubmit={this.handleSubmit}>
    <TextField label='Titre'/>
    <span className='input input--nao'>
      <textarea placeholder='Description' cols='47' rows='10'/>
    </span>
    <TricksTags changeTags={this.changeTags} />
    <div className='control'>
      <input type="submit" value="Create" className='xmasbutton'/>
    </div>
  </form>)
}
}

export default CreateTrick
