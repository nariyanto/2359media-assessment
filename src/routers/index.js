const RootRouter = require('./RootRouter')
const AuthRouter = require('./AuthRouter')
const RoomsRouter = require('./RoomsRouter')
const UsersRouter = require('./UsersRouter')

module.exports = [
  RootRouter,
  AuthRouter,
  RoomsRouter,
  UsersRouter
]