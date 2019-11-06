const express = require('express');
const knex = require('../data/db-config');

const router = express.Router();

router.get('/', (req, res) => {
  knex
    .select('*')
    .from('cars')
    .then(cars => {
      res.status(200).json(cars)
    })
    .catch(err => res.status(500).json({ error: 'Failed to retrieve cars' }));
});