import React from 'react'
import tagsStore from './TrickTagsStore'
import Select from 'react-select'
import _ from 'lodash'

export default class TrickTags extends React.Component {

  constructor(props) {
    super(props)
    this.state = tagsStore.getModel()
  }

  componentDidMount() {
    this.unsubscribe = tagsStore.listen(this.onStatusChange.bind(this));
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  onStatusChange() {
    this.setState(tagsStore.getModel())
  }

  changeTags = (value) => {
    this.setState({selectedTags: value})
    this.props.changeTags(value)
  }

  render() {

    let tagsOptions = _.map(this.state.tags, (tags) => {
      return {value: tags, label: tags}
    })

    return (<Select multi simpleValue autoBlur name='tags' value={this.state.selectedTags} options={tagsOptions} onChange={this.changeTags} placeholder='Sorte de coup'/>)
  }

}
