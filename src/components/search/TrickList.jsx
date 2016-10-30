import React from 'react'
import _ from 'lodash'
import './styles.css'

const TrickList = (props) => {

  let formatedTricks = _.cloneDeep(props.tricks)

  formatedTricks = _.map(formatedTricks, (trick) => {
    let tagsJoined = _.join(trick.tags, ',')
    return (<div className="trickRow" onClick={props.onClick} key={trick.id}>
      <div className='trickTitle'>{trick.title}</div>
      <div className='trickDescription'>{trick.description}</div>
      <div className="tags">{tagsJoined}</div>
    </div>)})

  return(<div className="trickList">
    {formatedTricks}
  </div>)
}

export default TrickList
