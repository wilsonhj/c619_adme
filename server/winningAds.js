const express = require('express');
const connection = require('./connection');
const router = express.Router();

// pick a winner by submissionID
router.post('/:campaignID', express.json(), (req, res, next) => {
  let params = [
    req.params.campaignID,
    req.body.submissionID
  ];

  connection.query(`SELECT * FROM winningAds WHERE campaignID = ?`, params, (err, rows, fields) => {
    if (err) return next(err);

    if (rows.length !== 0) {
      res.status(409).json({
        error: 'conflict',
        message: 'WINNER ALREADY EXISTS'
      });
    } else {
      connection.query(`INSERT INTO winningAds (campaignID, submissionID) VALUES ( ?, ? );`, params, (err, rows, fields) => {
        if (err) return next(err);
        res.status(201).json(rows);
      });

    }
  }
  );
});

// select all winners
router.get('/', (req, res, next) => {
  connection.query('SELECT * FROM winningAds', (err, rows, fields) => {
    if (err) return next(err);
    res.send(rows);
  });
});

// select one winner by submission id
router.get('/:id', (req, res, next) => {
  let params = [
    req.params.id
  ];
  connection.execute(`SELECT * FROM winningAds WHERE submissionID = ?`, params, (err, rows, fields) => {
    if (err) return next(err);
    res.send(rows[0]);
  });
});

module.exports = router;
