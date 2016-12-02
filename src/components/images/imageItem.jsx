import React from 'react'
import './addImage.css'

const ImageItem = (props) => {
  const destroy = () => {
    props.onDestroy(props.url)
  }
  return(<div className='imageItem'>
    {props.url}
    <button className="destroy" onClick={destroy} />
  </div>)
}

export default ImageItem
