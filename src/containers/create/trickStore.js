import Reflux from 'reflux'
import axios from 'axios'
import config from '../../config/config'

const createTrick = (payload, callback) => {
  axios.post(config.api + 'tricks/', payload).then((respond) => {
    callback(null,respond)
  }).catch((error) => {
    callback(error,null)
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
    status: '',
    errors: ''
  },

  init() { },

  clearModel() {
    this.model.trick.title = ''
    this.model.trick.description = ''
    this.model.trick.tags = []
    this.model.trick.images = []
    this.model.status = ''
    this.model.errors = ''
  },

  setModel(trick) {
    this.model.trick = trick
    this.model.status = ''
    this.model.errors = ''
  },

  getModel() {
    return this.model
  },

  saveTrick(trick) {
    createTrick(trick, (err, res) => {
      this.clearModel()
      if(err) {
        this.model.status = 500
        this.model.errors = err
      } else if(res){
        this.model.status = 201
      }
      this.trigger()
    })
  }
})

export default trickStore
