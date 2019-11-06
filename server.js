const express = require('express');

const DealerRouter = require('./dealer/dealer-router')

const server = express();

server.use(express.json());

server.use('api/cars', DealerRouter);

server.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
});

module.exports = server;
