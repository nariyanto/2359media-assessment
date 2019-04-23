const router = require('express').Router()

const actions = require('../actions/rooms')
const BaseRouter = require('../core/BaseRouter')
const ErrorWrapper = require('../core/ErrorWrapper')
const { errorCodes } = require('../config')

class RoomsRouter extends BaseRouter {
  get router () {
    router.param('id', validateRoomId)

    router.get('/rooms', this.actionRunner(actions.ListAction))
    router.get('/rooms/:id', this.actionRunner(actions.GetByIdAction))
    router.post('/rooms', this.actionRunner(actions.CreateAction))
    router.patch('/rooms/:id', this.actionRunner(actions.UpdateAction))
    router.delete('/rooms/:id', this.actionRunner(actions.RemoveAction))

    return router
  }

  async init () {
    __logger.info(`${this.constructor.name} initialized...`)
  }
}

function validateRoomId (req, res, next) {
  if (!Number(req.params.id)) {
    return next(new ErrorWrapper({ ...errorCodes.VALIDATION, message: 'Invalid room id' }))
  }
  next()
}

module.exports = new RoomsRouter()

