import Reflux from 'reflux'
import axios from 'axios'

const searchTricks = (payload, callback) => {
  axios.get('http://localhost:3001/tricks/', {params: payload}).then((respond) => {
    callback(respond.data)
  })
}

let trickListStore = Reflux.createStore({
  model: {
    trickSearch: {
      title: '',
      tricks: []
    }
  },

  init() { },

  getModel() {
    return this.model
  },

  getSearchTricks(searchForm) {
    this.model.trick = searchTricks(searchForm, (respond) => {
      this.model.name = searchForm.name
      this.model.tricks = respond
      this.trigger()
    })
  }
})

export default trickListStore
