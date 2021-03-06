const _ = require('lodash')
const faker = require('faker')

const getTricks = () => {
  return {
    tricks: _.times(100, (n) => {
      return {
        id: n,
        title: faker.lorem.words(),
        description: faker.lorem.paragraph(),
        tags: _.times(3, () => {
          return faker.lorem.word()
        })
      }
    })
  }
}

const getTags = () => {
  return {
    tags: _.times(500, () => {
      return faker.lorem.word()
    })
  }
}

const getPersonalities = () => {
  return {
    personalities: _.map(['gluton', 'tidy', 'messy', 'ingenious', 'acrobat', 'arstistic'], (personality) => {
      return {
        type: personality,
        tags: _.times(3, () => { return faker.lorem.word()})
      }
    })
  }
}

const getIntro = () => {
  return {
    info: {info: "Si vous voulez attraper un lutins, graillez-vous d'une batch de guimauves"}
  }
}

module.exports = () => Object.assign({}, getTricks(), getIntro(), getTags(), getPersonalities())
