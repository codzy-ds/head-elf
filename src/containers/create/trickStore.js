import Reflux from 'reflux'
import axios from 'axios'
import config from '../../config/config'

const createTrick = (payload, callback) => {
  axios.post(config.api + 'tricks/', payload).then((respond) => {
    callback(respond.data)
  })
}

let trickStore = Reflux.createStore({
  model: {
    trick: {
      title: '',
      description: '',
      tags: [],
      images:[]
    },
    status: ''
  },

  init() { },

  clearModel() {
    this.model.trick.title = ''
    this.model.trick.description = ''
    this.model.trick.tags = []
    this.model.trick.images = []
  },

  setModel(trick) {
    this.model.trick = trick
  },

  getModel() {
    return this.model
  },

  saveTrick(trick) {
    createTrick(trick, (response) => {
      this.clearModel()
      this.trigger()
    })
  }
})

export default trickStore
