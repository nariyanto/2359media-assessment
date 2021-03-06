require('dotenv').config()
require('../globals')()
const joi = require('joi')

class BaseConfig {
  set (value, validate) {
    if (validate && (typeof validate === 'function' || validate.isJoi)) {
      if (validate.isJoi) {
        const result = joi.validate(value, validate)
        if (!result.error) return value
        throw new Error(`Wrong env variable ${value} is invalid. ${result.error}`)
      }

      if (!validate(value)) {
        throw new Error(`Wrong env variable ${value} is invalid.`)
      }

      return value
    }

    throw new Error('validate should be a function or joi rule.')
  }

  get joi () {
    return joi
  }
}

module.exports = BaseConfig