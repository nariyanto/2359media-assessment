const joi = require('joi')

const BaseAction = require('../../core/BaseAction')
const RoomDAO = require('../../dao/RoomDAO')
const roomtypes = require('../../config').roomtypes

class CreateAction extends BaseAction {
  static get accessTag () {
    return 'rooms:create'
  }

  static get validationRules () {
    return {
      body: joi.object().keys({
        type: joi.string().required().valid(Object.values(roomtypes)),
        description: joi.string().min(3).required(),
        image: joi.string().allow('').allow(null),
        quantity: joi.number().required(),
        price: joi.number().required()
      })
    }
  }

  static async run (req, res) {
    const room = await RoomDAO.Create({
      ...req.body
    })

    res.json(this.resJson({ data: room }))
  }
}

module.exports = CreateAction
