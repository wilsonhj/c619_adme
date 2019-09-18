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
    if (err) throw err;

    if (rows.length !== 0) {
      res.json('WINNER ALREADY EXISTS');
    } else {
      connection.query(`INSERT INTO winningAds (campaignID, submissionID) VALUES ( ?, ? );`, params, (err, rows, fields) => {
        if (err) throw err;
        res.json(rows);
      });

    }
  }
  );
});

// select all winners
router.get('/', (req, res, next) => {
  connection.query('SELECT * FROM winningAds AS w JOIN submissions AS s ON w.submissionID = s.submissionID JOIN creators AS c ON s.creatorID = c.creatorID', (err, rows, fields) => {
    if (err) throw err;
    if (rows[0].submissionThumbnail) {
      rows[0].submissionThumbnail = rows[0].submissionThumbnail.substring(rows[0].submissionThumbnail.indexOf('uploads'));
    }
    if (rows[0].submissionContent) {
      rows[0].submissionContent = rows[0].submissionContent.substring(rows[0].submissionContent.indexOf('uploads'));
    }
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
