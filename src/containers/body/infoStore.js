import Reflux from 'reflux'
import fetch from 'axios'

const fetchInfo = (callback) => {
  fetch('http://localhost:3001/info/').then((respond) => {
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
