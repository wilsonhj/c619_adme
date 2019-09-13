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

  const query = `
    SELECT co.companyID,
           ca.campaignTitle,
           co.companyName,
           co.companyLogo,
           co.companyType,
           GROUP_CONCAT(DISTINCT s.submissionThumbnail) AS submissionThumbnails,
           GROUP_CONCAT(DISTINCT s.submissionContent) AS submissionsContent,
           GROUP_CONCAT(DISTINCT s.submissionID) AS submissionIDs
      FROM campaigns AS ca
 LEFT JOIN submissions AS s
        ON ca.campaignID = s.campaignID
      JOIN companies AS co 
        ON co.companyID = ca.companyID
     WHERE ca.companyID = 1 
  GROUP BY ca.campaignTitle
  `;

  connection.execute(query, [req.params.id], (err, rows, fields) => {
    // console.log(rows[0]);
    if (err) throw err;
    rows.forEach(row => {
      if (row.submissionThumbnails !== null) {
        var submissionThumbnailArray = row.submissionThumbnails.split(',');
        row.submissionThumbnails = submissionThumbnailArray[0];
        row.submissionThumbnails = row.submissionThumbnails.substring(row.submissionThumbnails.indexOf('uploads'));
      } else {
        row.submissionThumbnails = '';
      }
      if (row.submissionsContent !== null) {
        var submissionsContextArray = row.submissionsContent.split(',');
        row.submissionsContent = submissionsContextArray[0];
        row.submissionsContent = row.submissionsContent.substring(row.submissionsContent.indexOf('uploads'));
      } else {
        row.submissionsContent = '';
      }
      if (row.submissionIDs !== null) {
        var submissionidsArray = row.submissionIDs.split(',');
        row.submissionIDs = submissionidsArray[0];
      } else {
        row.submissionIDs = '';
      }
    });
    res.send(rows);
  });
});
/**
 *
 * 'SELECT co.companyID, ca.campaignTitle, co.companyName, co.companyLogo, co.companyType, GROUP_CONCAT(DISTINCT s.submissionThumbnail) AS submissionThumbnails, GROUP_CONCAT(DISTINCT s.submissionContent) AS submissionsContent, GROUP_CONCAT(DISTINCT s.submissionID) AS submissionIDs FROM `campaigns` AS ca LEFT JOIN `submissions` AS s ON ca.campaignID = s.campaignID JOIN `companies` co ON co.companyID = ca.companyID WHERE ca.companyID = 1 GROUP BY ca.campaignTitle'
 */
router.get('/', (req, res, next) => {
  connection.query('SELECT * FROM `campaigns`', (err, rows, fields) => {
    if (err) throw err;
    res.json(rows);
  });
});

module.exports = router;
