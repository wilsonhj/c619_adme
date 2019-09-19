require('dotenv/config');
const path = require('path');
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
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

server.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: 'An unexpected error has occurred'
  });

});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('its listening closely');
});
