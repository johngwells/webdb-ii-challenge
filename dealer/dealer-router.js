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
    .catch(err => res.status(500).json({ error: 'Failed to retrieve vehicles' }));
});

router.post('/', (req, res) => {
  knex
    .insert(req.body, 'id')
    .into('cars')
    .then(id => res.status(200).json(id))
    .catch(err => res.status(500).json({ error: 'Failed to add vehicle information - VIN should be unique' }));
});

router.put('/:id', (req, res) => {
  const changes = req.body;

  knex('cars')
    .where({ id: req.params.id })
    .update(changes)
    .then(count => {
      res.status(200).json(count)
    })
    .catch(err => res.status(500).json({ error: 'Failed to update vehicle' }));
});

router.delete('/:id', (req, res) => {
  knex('cars')
    .where({ id: req.params.id })
    .del()
    .then(count => {
      res.status(200).json(count)
    })
    .catch(err => res.status(500).json({ error: 'Failed to delete vehicle' }));
});

module.exports = router;
