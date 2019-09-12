const express = require('express');
const connection = require('./connection');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'public/uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('campaignContent'), (req, res, next) => {
  let params = [req.body.companyID, req.body.title, req.body.description, req.body.preferredContentType, req.file.path, req.body.runSpace, req.body.requirements, req.body.rewards];
  connection.execute('INSERT INTO `campaigns` ( `companyID`,`title`, `description`, `preferredContentType`, `campaignContent`, `runSpace`, `requirements`, `rewards`, `submissionsReceived`) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, 0);', params, (err, rows, fields) => {

    if (err) throw err;
    let response = {
      requestBody: req.body,
      requestFileStorageInfo: req.file,
      mySqlRows: rows
    };
    res.json(response);
  });

});

router.get('/company/:id', (req, res, next) => {

  connection.execute('SELECT co.companyID, ca.campaignTitle, co.companyName, co.companyLogo, co.companyType, GROUP_CONCAT(DISTINCT s.submissionThumbnail) AS submissionThumbnails, GROUP_CONCAT(DISTINCT s.submissionContent) AS submissionsContent FROM `campaigns` AS ca LEFT JOIN `submissions` AS s ON ca.campaignID = s.campaignID JOIN `companies` co ON co.companyID = ca.companyID WHERE ca.companyID = 1 GROUP BY ca.campaignTitle', [req.params.id], (err, rows, fields) => {
    if (err) throw err;
    if (rows[0].submissionThumbnails) {
      var submissionThumbnailArray = rows[0].submissionThumbnails.split(',');
      rows[0].submissionThumbnails = submissionThumbnailArray;
    }
    if (rows[0].submissionsContent) {
      var submissionsContextArray = rows[0].submissionsContent.split(',');
      rows[0].submissionsContent = submissionsContextArray;
    }
    res.json(rows);
  });
});

router.get('/', (req, res, next) => {
  connection.query('SELECT * FROM `campaigns`', (err, rows, fields) => {
    if (err) throw err;
    res.json(rows);
  });
});

module.exports = router;
