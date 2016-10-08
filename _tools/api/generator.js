const _ = require('lodash')
const faker = require('faker')

const getTricks = () => {
  return {
    tricks: _.times(100, (n) => {
      return {
        id: n,
        title: faker.lorem.words(),
        descriptions: faker.lorem.paragraph(),
        tags: _.times(3, () => {
          return faker.lorem.word()
        })
      }
    })
  }
}

module.exports = () => Object.assign({}, getTricks())
