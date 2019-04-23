
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('bookings', table => {
      table.increments()
      table.integer('userId').references('id').inTable('users').onDelete('CASCADE')
      table.integer('reservedId').references('id').inTable('reserved').onDelete('CASCADE')
      table.float('total').notNull()
      table.string('status').notNull()
      table.timestamp('createdAt').defaultTo(knex.fn.now()).notNull()
      table.timestamp('updatedAt').defaultTo(knex.fn.now()).notNull()
    })  
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('bookings')
};
