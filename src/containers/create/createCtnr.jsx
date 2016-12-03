import React from 'react'
import trickStore from './trickStore'
import TextField from '../../components/commons/textField'
import TricksTags from '../../components/tags/TricksTags'
import AddImages from '../../components/images/addImages'
import _ from 'lodash'
import './styles.css'

class CreateTrick extends React.Component {

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

  handleSubmit = () => {
    let trick = {
      title: this.state.trick.title,
      description: this.state.trick.description,
      tags: this.state.trick.selectedTags,
      images: this.state.trick.images
    }
    trickStore.saveTrick(trick)
  }

  changeTitle = (event) => {
    this.setTrick('title', event.target.value)
  }

  changeTags = (value) => {
    this.setTrick('selectedTags', value)
  }

  changeDescription = (event) => {
    this.setTrick('description', event.target.value)
  }

  setTrick = (name, value) => {
    let trick = this.state.trick
    trick[name] = value
    this.setState({trick: trick})
  }

  addUrl = (url) => {
    let urls = this.state.images || []
    urls.push(url)
    this.setTrick('images', urls)
  }

  removeUrl = (value) => {
    let images = this.state.images
    _.pull(images, value)
    this.setTrick('images', images)
  }

  render() {
    let status
    if(this.state.status === 201) {
      status = <div className='success'>Sauvegarde réussie</div>
      trickStore.clearModel()
    } else if(this.state.status === 500) {
      let errorMsg = 'Des erreures sont survenues pendant la sauvegarde : ' + this.state.errors
      status = <div className='error'>{errorMsg}</div>
      trickStore.clearModel()
    }
    return (<div className='create-trick-form'>
      <div className='status-bar'>
        {status}
      </div>
      <TextField label='Titre' onChange={this.changeTitle}/>
      <span className='input input--nao'>
        <textarea placeholder='Description' cols='54' rows='10' onChange={this.changeDescription}/>
      </span>
      <AddImages urls={this.state.trick.images || []} onChange={this.addUrl} onDestroy={this.removeUrl}/>
      <TricksTags changeTags={this.changeTags} />
      <div className='control'>
        <button className='xmasbutton' onClick={this.handleSubmit}>Cr&eacute;er</button>
      </div>
    </div>)
  }
}

export default CreateTrick
