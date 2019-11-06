// Step 1. npx knex init
// npx knex migrate:latest 
// creates db
exports.up = function(knex) {
  // the chane we want to our schema
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.string('VIN', 128)
      .unique()
      .notNullable();
    tbl.string('Make')
      .notNullable();
    tbl.string('Model')
      .notNullable();
    tbl.integer('Mileage')
      .notNullable();
    tbl.string('Transmission Type')
    tbl.string('Title')
  });
};

exports.down = function(knex) {
    // undoing that change
    return knex.schema.dropTableIfExists('cars')
};
