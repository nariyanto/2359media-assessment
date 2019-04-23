const roles = require('../../src/config').roles

exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('users', table => {
      table.increments()
      table.string('username', 25).unique().notNull()
      table.string('name', 100)
      table.string('role').defaultTo(roles.user).notNull()
      table.string('email', 100).unique().notNull()
      table.boolean('isEmailConfirmed').defaultTo(false)
      table.text('emailConfirmToken')

      table.text('passwordHash').notNull()
      table.jsonb('refreshTokensMap').defaultTo('{}')
      table.text('resetEmailToken')

      table.timestamp('createdAt').defaultTo(knex.fn.now()).notNull()
      table.timestamp('updatedAt').defaultTo(knex.fn.now()).notNull()
    })  
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('users')
};
