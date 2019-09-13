const express = require('express');
const connection = require('./connection');
const router = express.Router();

router.get('/', (req, res, next) => {
  connection.query('SELECT * FROM `creators` WHERE `creatorID` = 2', (err, creators, fields) => {
    if (err) throw err;
    connection.query('SELECT * FROM `companies` WHERE `companyID` = 1', (err, companies, fields) => {
      if (err) throw err;
      res.send(creators.concat(companies));

    });

  });

});

module.exports = router;
