import Reflux from 'reflux'
import axios from 'axios'
import config from '../../config/config'

const createTrick = (payload, callback) => {
  axios.post(config.api + 'tricks/', {params: payload}).then((respond) => {
    callback(respond.data)
  })
}

let createTrickStore = Reflux.createStore({
  model: {
    createTrick: {
      title: '',
      description: '',
      tags: [],
      images:[]
    },
    status: ''
  },

  init() { },

  clearModel() {
    this.model.createTrick.title = ''
    this.model.createTrick.description = ''
    this.model.createTrick.tags = []
    this.model.createTrick.images = []
  },

  getModel() {
    return this.model
  },

  saveTrick(searchForm) {
    this.model.trick = createTrick(searchForm, (response) => {
      this.model.status = response.heander.status
      this.clearModel()
      this.trigger()
    })
  }
})

export default createTrickStore
