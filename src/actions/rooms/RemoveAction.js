const BaseAction = require('../../core/BaseAction')
const RoomDAO = require('../../dao/RoomDAO')

class RemoveAction extends BaseAction {
  static get accessTag () {
    return 'users:remove'
  }

  static async run (req, res) {
    
    await RoomDAO.BaseGetById(+req.params.id)
    await RoomDAO.BaseRemove(+req.params.id)

    res.json(this.resJson({ message: `${req.params.id} was removed` }))
  }
}

module.exports = RemoveAction
