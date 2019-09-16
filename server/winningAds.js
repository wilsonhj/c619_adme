const express = require('express');
const connection = require('./connection');
const router = express.Router();

// pick a winner by submissionID
router.post('/:submisionID', (req, res, next) => {
  let params = [
    req.params.submissionID
    // req.body.campaignID
  ];
  // connection.execute(`SELECT * FROM winningAds`)
  connection.execute(`INSERT INTO winningAds (submissionID) VALUES ( ? );`, params, (err, rows, fields) => {
    if (err) throw err;
    res.json(rows);
  });
});

// select all winners
router.get('/', (req, res, next) => {
  connection.query('SELECT * FROM winningAds', (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
  });
});

// select one winner by submission id
router.get('/:id', (req, res, next) => {
  let params = [
    req.params.id
  ];
  connection.execute(`SELECT * FROM winningAds WHERE submissionID = ?`, params, (err, rows, fields) => {
    if (err) throw err;
    res.send(rows[0]);
  });
});

module.exports = router;
