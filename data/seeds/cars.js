exports.seed = function(knex, Promise) {
  return knex('cars').truncate()
    .then(function() {
      return knex('cars').insert([
        {
          VIN: 123456789,
          Make: 'Chevy',
          Model: 'Nova SS',
          Mileage: 1000
        }
      ]);
    });
};