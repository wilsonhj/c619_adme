const express = require('express');
const connection = require('./connection');
const router = express.Router();

router.get('/', (req, res, next) => {
  connection.query('SELECT * FROM `creators`', (err, creators, fields) => {
    if (err) throw err;
    connection.query('SELECT * FROM `companies`', (err, companies, fields) => {
      if (err) throw err;
      res.send(creators.concat(companies));
    });
  });
});

module.exports = router;
