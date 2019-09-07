const express = require('express');
const connection = require('./connection');
const router = express.Router();

router.get('/:id', (req, res, next) => {
  var creatorID = req.params.id;
  connection.query('SELECT * FROM `creators` WHERE `creatorID` = `' + creatorID, (err, rows, fields) => {
    if (err) throw err;

    res.json(rows);
  });

});

module.exports = router;
