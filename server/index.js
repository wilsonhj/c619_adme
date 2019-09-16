require('dotenv/config');
const connection = require('./connection');
const express = require('express');
const companies = require('./companies');
const creators = require('./creators');
const campaigns = require('./campaigns');
const submissions = require('./submissions');
const winningAds = require('./winningAds');
const user = require('./user');

const server = express();
let PORT = process.env.PORT;

connection.connect();

server.use('/api/companies', companies);
server.use('/api/creators', creators);
server.use('/api/campaigns', campaigns);
server.use('/api/submissions', submissions);
server.use('/api/winningAds', winningAds);
server.use('/api/user', user);
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('its listening closely');
});
