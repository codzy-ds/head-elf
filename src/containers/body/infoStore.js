import Reflux from 'reflux'
import fetch from 'axios'
import config from '../../config/config'

const fetchInfo = (callback) => {
  fetch(config.api + 'info/').then((respond) => {
    callback(respond.data)
  })
}

let InfoStore = Reflux.createStore({
  model: {
    title: "",
    info: ""
  },

  init() {
    fetchInfo((respond) => {
      this.model.info = respond.info
      this.trigger()
    })
  },

  getModel() {
    return this.model
  }
})

export default InfoStore
