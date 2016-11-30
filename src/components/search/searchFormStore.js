import Reflux from 'reflux'
import axios from 'axios'
import _ from 'lodash'
import config from '../../config/config'

const searchFormData = (callback) => {
  axios.get(config.api + 'personalities').then((personalityRes) => {
    callback(personalityRes.data)
  })
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
    searchFormData((personalities) => {
      this.model.personalities = _.map(personalities, (personality) => {return personality.type})
      this.trigger()
    })
  },

  getModel() {
    return this.model
  }
})

export default searchFormStore
