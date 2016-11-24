import Reflux from 'reflux'
import axios from 'axios'
import _ from 'lodash'
import config from '../../config/config'

const searchFormData = (callback) => {
  axios.all([axios.get(config.api + 'tags'),axios.get(config.api + 'personalities')]).then(axios.spread((tagsRes, personalityRes) => {
    callback(tagsRes.data, personalityRes.data)
  }))
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
    searchFormData((tags, personalities) => {
      this.model.tags = tags
      this.model.personalities = _.map(personalities, (personality) => {return personality.type})
      this.trigger()
    })
  },

  getModel() {
    return this.model
  }
})

export default searchFormStore
