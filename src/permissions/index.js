const roles = require('../config').roles
const RoleAdminAccess = require('./RoleAdminAccess')
const RoleUserAccess = require('./RoleUserAccess')
const RoleAnonymousAccess = require('./RoleAnonymousAccess')

module.exports = {
  [roles.superadmin]: [
    // [roles.superadmin] have all permissions
    // so we don't need to list it
    // just check [roles.superadmin] in access services
  ],
  [roles.admin]: RoleAdminAccess.can,
  [roles.user]: RoleUserAccess.can,
  [roles.anonymous]: RoleAnonymousAccess.can
}
