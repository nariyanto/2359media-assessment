const joi = require('joi')
const BaseAction = require('../../core/BaseAction')
const RoomDAO = require('../../dao/RoomDAO')

/**
 * @description return rooms list
 */
class ListAction extends BaseAction {
  static get accessTag () {
    return 'rooms:list'
  }

  static get validationRules () {
    return {
      query: joi.object().keys({
        ...this.baseQueryParams,
        filter: joi.object().keys({
          username: joi.string().min(3)
        })
      })
    }
  }

  static async run (req, res) {
    const { query } = req
    const data = await RoomDAO.BaseGetList({ ...query })
    res.header('X-Total-Count', data.total)
    res.json(this.resJson({ data: data.results }))
  }
}

module.exports = ListAction
