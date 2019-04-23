const bcrypt = require('bcryptjs');
const roles = require('../../../src/config').roles

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      const salt = bcrypt.genSaltSync(10);
      // Inserts seed entries
      return knex('users').insert([
        {username: 'admin', name: 'Administrator', role: roles.superadmin, email: 'admin@mail.com', passwordHash: bcrypt.hashSync('admin', salt)}
      ]);
    });
};
