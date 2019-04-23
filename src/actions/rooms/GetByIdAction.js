const BaseAction = require('../../core/BaseAction')
const RoomDAO = require('../../dao/RoomDAO')

/**
 * @description return room by id
 */
class GetByIdAction extends BaseAction {
  static get accessTag () {
    return 'rooms:get-by-id'
  }

  static async run (req, res) {
    const model = await RoomDAO.BaseGetById(+req.params.id)
    res.json(this.resJson({ data: model }))
  }
}

module.exports = GetByIdAction
