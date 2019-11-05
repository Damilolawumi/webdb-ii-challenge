const express = require('express');
const helmet = require('helmet');

const carRouter = require('./cars/carsRouter');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cars', carsRouter);

module.exports = server