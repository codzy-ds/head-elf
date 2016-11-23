import React from 'react'
import TextField from '../../components/commons/textField'
import './styles.css'

class CreateTrick extends React.Component {

  render() {
    return (<form>
      <TextField label='Titre'/>
      <textarea placeholder='Description' />
      <TextField label='Images'/>
    </form>)
  }
}

export default CreateTrick
