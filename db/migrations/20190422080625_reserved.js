
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('reserved', table => {
      table.increments()
      table.integer('roomId').references('id').inTable('rooms').onDelete('CASCADE')
      table.date('date').notNull()
      table.timestamp('createdAt').defaultTo(knex.fn.now()).notNull()
      table.timestamp('updatedAt').defaultTo(knex.fn.now()).notNull()
    })  
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('reserved')
};
