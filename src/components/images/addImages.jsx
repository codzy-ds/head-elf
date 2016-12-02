import React from 'react'
import TextField from '../commons/textField'
import ImageItem from './imageItem'
import './addImage.css'

class AddImages extends React.Component {

  changeUrl = (event) => {
    this.setState({url: event.target.value})
  }

  addUrl = () => {
    this.props.onChange(this.state.url)
  }

  render() {
    let urls = this.props.urls.map((url) => {
      return(<ImageItem key={url} url={url} onDestroy={this.props.onDestroy}/>)
    })

    return (<div>
      <div className='addImageRow'>
        <TextField id='imageUrl' label='Image URL' onChange={this.changeUrl}/><button className='xmasbutton addButton' onClick={this.addUrl} >Ajouter</button>
      </div>
      <div className='imagesList'>
        {urls}
      </div>
    </div>)
  }
}

export default AddImages
