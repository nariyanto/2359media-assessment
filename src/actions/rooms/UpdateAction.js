const joi = require('joi')

const BaseAction = require('../../core/BaseAction')
const RoomDAO = require('../../dao/RoomDAO')
const roomtypes = require('../../config').roomtypes

class UpdateAction extends BaseAction {
  static get accessTag () {
    return 'rooms:update'
  }

  static get validationRules () {
    return {
      body: joi.object().keys({
        description: joi.string().min(3).required(),
        image: joi.string().allow('').allow(null),
        quantity: joi.number().required(),
        price: joi.number().required()
      })
    }
  }

  static async run (req, res) {
    
    await RoomDAO.BaseGetById(+req.params.id)
    const data = await RoomDAO.BaseUpdate(+req.params.id, req.body) // user can update only itself
    res.json(this.resJson({ data }))
  }
}

module.exports = UpdateAction
