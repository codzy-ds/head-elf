import React from 'react'
import TextField from '../commons/textField'

class SearchForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  sendSearchAction = () => {
    let syntheticEvent = {
      title: this.state.title
    }
    this.props.searchAction(syntheticEvent)
  }

  changeValue = (event) => {
    this.setState({title: event.target.value})
  }

  render() {
    return(<div>
      <TextField placeholder='Trick Name' onChange={this.changeValue} label='Trick Name' id='trickName'/>
      <div className='control'>
      <button className='search' onClick={this.sendSearchAction}>search</button>
      </div>
      </div>)
    }
  }

  export default SearchForm
