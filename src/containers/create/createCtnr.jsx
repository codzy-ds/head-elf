import React from 'react'
import createTrickStore from './createStore'
import TextField from '../../components/commons/textField'
import TricksTags from '../../components/tags/TricksTags'
import AddImages from '../../components/images/addImages'
import _ from 'lodash'
import './styles.css'

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

  addUrl = (url) => {
    console.log(url)
    let urls = this.state.images || []
    urls.push(url)
    this.setState({images: urls})
  }

  render() {
    return (<form className='create-trick-form' onSubmit={this.handleSubmit}>
      <TextField label='Titre'/>
      <span className='input input--nao'>
        <textarea placeholder='Description' cols='47' rows='10'/>
      </span>
      <AddImages urls={this.state.images || []} onChange={this.addUrl} />
      <TricksTags changeTags={this.changeTags} />
      <div className='control'>
        <input type="submit" value="Create" className='xmasbutton'/>
      </div>
    </form>)
  }
}

export default CreateTrick
