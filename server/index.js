require('dotenv/config');
const connection = require('./connection');
const express = require('express');
const companies = require('./companies');
const creators = require('./creators');

const server = express();
let PORT = process.env.PORT;

connection.connect();

server.use('/api/companies', companies);
server.use('/api/creators', creators);
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('its listening');
});
