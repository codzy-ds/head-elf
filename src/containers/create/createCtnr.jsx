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
      title: this.state.title,
      description: this.state.description,
      tags: this.state.selectedTags,
      images: this.state.images
    }
    trickStore.saveTrick(trick)
  }

  changeTitle = (event) => {
    this.setState({title: event.target.value})
  }

  changeTags = (value) => {
    this.setState({selectedTags: value})
  }

  changeDescription = (event) => {
    this.setState({description: event.target.value})
  }

  addUrl = (url) => {
    let urls = this.state.images || []
    urls.push(url)
    this.setState({images: urls})
  }

  removeUrl = (value) => {
    let images = this.state.images
    _.pull(images, value)
    this.setState({images: images})
  }

  render() {
    return (<div className='create-trick-form'>
    <TextField label='Titre' onChange={this.changeTitle}/>
    <span className='input input--nao'>
      <textarea placeholder='Description' cols='54' rows='10' onChange={this.changeDescription}/>
    </span>
    <AddImages urls={this.state.images || []} onChange={this.addUrl} onDestroy={this.removeUrl}/>
    <TricksTags changeTags={this.changeTags} />
    <div className='control'>
      <button className='xmasbutton' onClick={this.handleSubmit}>Cr&eacute;er</button>
    </div>
  </div>)
}
}

export default CreateTrick
