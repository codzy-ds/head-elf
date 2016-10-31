import Reflux from 'reflux'
import axios from 'axios'

const searchFormData = (callback) => {
  axios.all(axios.get('http://localhost:3001/tags'),axios.get('http://localhost:3001/tags')).then(axios.spread((tagsRes, personalityRes) => {
    callback(tagsRes.data, personalityRes.data)
  }))
}

let searchFormStore = Reflux.createStore({
  model: {
    trickSearch: {
      title: '',
      tags: [],
      personalities: []
    }
  },

  init() {
    this.model.title = 'truc'
    this.model.tags = ['un', 'deux', 'trois']
    this.model.personalities = ['gluton', 'tidy', 'messy', 'ingenious', 'acrobat', 'arstistic']
  },

  getModel() {
    return this.model
  }
})

export default searchFormStore
