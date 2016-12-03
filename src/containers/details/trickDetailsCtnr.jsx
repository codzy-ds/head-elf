import React from 'react'
import trickStore from '../create/trickStore'
import './styles.css'

export default class TrickDetails extends React.Component {

  constructor() {
    super()
    this.state = trickStore.getModel()
  }

  render() {
    let trick = this.state.trick
    let tags = trick.tags.map((tag,i) => {return(<span className='TagClass' key={i}>{tag}</span>)})
    let images = trick.images.map((image, i) => {
      return(<span className="trickImage" key={i}><img src={image} alt={trick.title} /></span>)
    })
    return(<div className='trickDetails'>
      <h2>{trick.title}</h2>
      <p>{trick.description}</p>
      <p>{tags}</p>
      <p className='images-list'>{images}</p>
    </div>)
  }
}
