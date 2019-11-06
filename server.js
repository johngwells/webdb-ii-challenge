const express = require('express');

// router const DealerRouter = require('./dealer/dealer-router.js);

const server = express();

server.use(express.json());

// server.use('api/cars', Dealerouter);

server.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
});

module.exports = server;
