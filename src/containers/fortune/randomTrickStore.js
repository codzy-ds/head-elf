import Reflux from 'reflux'
import fetch from 'axios'
import config from '../../config/config'

const fetchTrick = (callback) => {
  fetch(config.api + 'tricks/random').then((respond) => {
    callback(respond.data)
  })
}

let fortuneStore = Reflux.createStore({
  model: {
    trick: {}
  },

  init() {
    fetchTrick((respond) => {
      this.model.trick = respond
      this.trigger()
    })
  },

  getModel() {
    return this.model
  },

  getRandomTrick() {
    this.model.trick = fetchTrick((respond) => {
      this.model.trick = respond
      this.trigger()
    })
  }
})

export default fortuneStore
