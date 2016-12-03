import React from 'react'
import _ from 'lodash'
import './styles.css'

const TrickList = (props) => {

  let formatedTricks = _.cloneDeep(props.tricks)

  formatedTricks = _.map(formatedTricks, (trick) => {
    let tagsJoined = _.join(trick.tags, ', ')

    const onClick = () => {
      props.onClick(trick)
    }

    return (<div className="trickRow" onClick={onClick} key={trick._id} id={trick._id}>
      <div className='trickTitle'>{trick.title}</div>
      <div className='trickDescription'>{trick.description}</div>
      <div className="tags"><b>{tagsJoined}</b></div>
    </div>)})

  return(<div className="trickList">
    {formatedTricks}
  </div>)
}

export default TrickList
