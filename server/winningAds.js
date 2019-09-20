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
  connection.query('SELECT * FROM winningAds AS w JOIN submissions AS s ON w.submissionID = s.submissionID JOIN creators AS c ON s.creatorID = c.creatorID', (err, rows, fields) => {
    if (err) return next(err);
    if (rows.length === 0) {
      res.send(rows);
      return;
    }
    rows.map(row => {
      if (row.submissionThumbnail) {
        row.submissionThumbnail = row.submissionThumbnail.substring(row.submissionThumbnail.indexOf('uploads'));
      }
      if (row.submissionContent) {
        row.submissionContent = row.submissionContent.substring(row.submissionContent.indexOf('uploads'));
      }
    });

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
