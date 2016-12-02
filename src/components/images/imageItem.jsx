import React from 'react'
import './addImage.css'

const ImageItem = (props) => {
  return(<div className='imageItem'>
    {props.url}
    <button className="destroy" onClick={props.onDestroy} />
  </div>)
}

export default ImageItem
