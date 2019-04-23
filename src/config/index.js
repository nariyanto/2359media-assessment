const app = require('./app')
const errorCodes = require('./errorCodes')
const knex = require('./knex')
const token = require('./token')
const roles = require('./roles')
const roomtypes = require('./roomtypes')
const email = require('./email')

module.exports = {
  app,
  errorCodes,
  knex,
  token,
  roles,
  roomtypes,
  email
}