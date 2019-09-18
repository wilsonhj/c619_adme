const express = require('express');
const connection = require('./connection');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'public/uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.get('/', (req, res, next) => {
  connection.query('SELECT * FROM `submissions`', (err, rows, fields) => {
    if (err) return next(err);
    res.status(200).send(rows);
  });
});

router.get('/trending', (req, res, next) => {
  connection.query(`SELECT * FROM submissions AS s
   JOIN campaigns as c
   ON s.campaignID = c.campaignID
   JOIN  creators
   ON s.creatorID = creators.creatorID
   ORDER BY s.likes`, (err, rows, fields) => {
    if (err) return next(err);
    rows.forEach(row => {
      if (row.submissionThumbnail) {
        row.submissionThumbnail = row.submissionThumbnail.substring(row.submissionThumbnail.indexOf('uploads'));
      }
      if (row.submissionContent) {
        row.submissionContent = row.submissionContent.substring(row.submissionContent.indexOf('uploads'));
      }
    });
    res.status(200).send(rows);
  });
});

router.get('/:submissionID', (req, res, next) => {
  connection.query(`SELECT * FROM submissions AS s
   JOIN campaigns as c
   ON s.campaignID = c.campaignID
   JOIN  creators
   ON s.creatorID = creators.creatorID
   WHERE s.submissionID = ${req.params.submissionID}`, (err, rows, fields) => {
    if (err) return next(err);
    if (rows[0].submissionThumbnail) {
      rows[0].submissionThumbnail = rows[0].submissionThumbnail.substring(rows[0].submissionThumbnail.indexOf('uploads'));
    }
    if (rows[0].submissionContent) {
      rows[0].submissionContent = rows[0].submissionContent.substring(rows[0].submissionContent.indexOf('uploads'));
    }
    res.status(200).send(rows);
  });
});

router.delete('/:submissionID', jsonParser, (req, res, next) => {
  connection.query(`DELETE from submissions WHERE submissionID = ${req.params.submissionID}`, (err, rows, fields) => {
    if (err) return next(err);
    res.status(204).send(rows);
  });
});

router.post('/likes/:submissionID', jsonParser, (req, res, next) => {
  connection.execute('UPDATE submissions SET `likes` = likes + 1 WHERE `submissionID` = ?', [req.params.submissionID], (err, rows, fields) => {
    if (err) return next(err);
    res.status(201).send(rows);
  });
});

router.post('/dislikes/:submissionID', jsonParser, (req, res, next) => {
  connection.execute('UPDATE submissions SET `likes` = likes - 1 WHERE `submissionID` = ?', [req.params.submissionID], (err, rows, fields) => {
    if (err) return next(err);
    res.status(204).send(rows);
  });
});

router.post('/', upload.fields([{ name: 'submissionThumbnail' }, { name: 'submissionContent' }]), (req, res, next) => {
  let params = [req.body.creatorID, req.body.typeOfContent, req.files.submissionThumbnail[0].path, req.files.submissionContent[0].path, req.body.title, req.body.campaignID, req.body.likes, req.body.submissionDescription];

  connection.execute('INSERT INTO `submissions` ( `creatorID`, `typeOfContent`, `submissionThumbnail`, `submissionContent`, `title`, `campaignID`, `likes`, `submissionDescription`) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?);', params, (err, rows, fields) => {

    if (err) return next(err);
    let response = {
      requestBody: req.body,
      requestFileStorageInfo: req.files,
      mySqlRows: rows
    };
    if (!err) {
      res.status(201).json(response);
    }
  });

});

module.exports = router;
