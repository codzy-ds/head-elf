import React from 'react'
import './addImage.css'

const ImageItem = (props) => {
  destroy = () => {
    props.onDestroy(props.url)
  }
  return(<div className='imageItem'>
    {props.url}
    <button className="destroy" onClick={props.onDestroy} />
  </div>)
}

export default ImageItem
