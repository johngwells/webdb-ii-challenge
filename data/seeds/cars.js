exports.seed = function(knex, Promise) {
  return knex('cars').truncate()
    .then(function() {
      return knex('cars').insert([
        {
          VIN: 1234,
          Make: 'Honda',
          Model: 'Civic',
          Mileage: 1000
        }
      ]);
    });
};