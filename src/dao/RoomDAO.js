const { raw } = require('objection')

const BaseDAO = require('../core/BaseDAO')

class UserDAO extends BaseDAO {
  static get tableName () {
    return 'rooms'
  }

  /**
   * ------------------------------
   * @HOOKS
   * ------------------------------
   */
  $formatJson (json) {
    json = super.$formatJson(json)

    return json
  }

  /**
   * ------------------------------
   * @METHODS
   * ------------------------------
   */

  static Create (data) {
    __typecheck(data, __type.object, true)
    __typecheck(data.quantity, __type.number, true, 'Invalid \'Quantity\' field')
    __typecheck(data.price, __type.number, true, 'Invalid \'Price\' field')

    return this.query().insert(data)
  };


  /**
   * @description check roomtype availability in DB.
   * @param roomtype
   * @returns {Promise<boolean>}
   */
  static IsRoomExist (roomtype) {
    __typecheck(roomtype, __type.string, true)

    return this.query().where({ roomtype }).first()
      .then(data => Boolean(data))
      .catch(error => { throw error })
  }

}

module.exports = UserDAO