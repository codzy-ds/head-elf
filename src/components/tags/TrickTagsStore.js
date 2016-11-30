import Reflux from 'reflux'
import axios from 'axios'
import _ from 'lodash'
import config from '../../config/config'

const getTags = (callback) => {
  axios.get(config.api + 'tags').then((tagsRes) => {
    callback(tagsRes.data)
  })
}

let tagsStore = Reflux.createStore({
  model: {
      tags: []
    },

  init() {
    getTags((tags) => {
      this.model.tags = tags
      this.trigger()
    })
  },

  getModel() {
    return this.model
  }
})

export default tagsStore
