import Reflux from 'reflux'
import axios from 'axios'
import config from '../../config/config'

const searchTricks = (payload, callback) => {
  axios.get(config.api + 'tricks/', {params: payload}).then((respond) => {
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
