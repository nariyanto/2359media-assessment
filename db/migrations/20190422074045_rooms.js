const roomtypes = require('../../src/config').roomtypes

exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('rooms', table => {
      table.increments()
      table.string('type').defaultTo(roomtypes.single).unique().notNull()
      table.text('description')
      table.string('image')
      table.integer('quantity').notNull()
      table.float('price').notNull()

      table.timestamp('createdAt').defaultTo(knex.fn.now()).notNull()
      table.timestamp('updatedAt').defaultTo(knex.fn.now()).notNull()
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('rooms')
};
