import Reflux from 'reflux'
import fetch from 'axios'

const fetchTrick = (callback) => {
  const rand = Math.floor(Math.random() * 100)
  fetch('http://localhost:3001/tricks/'+rand).then((respond) => {
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
