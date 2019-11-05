const express = require('express');
const helmet = require('helmet');

const carRouter = require('./cars/carsRouter');

const server = express();

server.use(helmet());
server.use(express.json());

// server.use('/api/cars', carsRouter);

server.get("/", (req, res) => {
    res.send("<h3>DB Helpers with knex</h3>");
  });
  

module.exports = server