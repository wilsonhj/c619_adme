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
  let params = [
    req.body.companyID,
    req.body.title,
    req.body.description,
    req.body.preferredContentType,
    req.file.path,
    req.body.runSpace,
    req.body.requirements,
    req.body.rewards
  ];
  connection.execute(`INSERT INTO campaigns
                        ( companyID,campaignTitle, description, preferredContentType, campaignContent, runSpace, requirements, rewards, submissionsReceived)
                      VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, 0);`, params, (err, rows, fields) => {

    if (err) return next(err);
    let response = {
      requestBody: req.body,
      requestFileStorageInfo: req.file,
      mySqlRows: rows
    };
    res.status(201).json(response);
  });

});

// company dashboard

router.get('/company/:id', (req, res, next) => {

  const query = `
    SELECT co.companyID,
           ca.campaignTitle,
           ca.campaignContent,
           ca.campaignID,
           co.companyName,
           co.companyLogo,
           co.companyType
      FROM companies AS co
      LEFT JOIN campaigns AS ca
        ON co.companyID = ca.companyID
     WHERE ca.companyID = ?
  `;

  connection.execute(query, [req.params.id], (err, rows, fields) => {
    if (err) return next(err);
    rows.forEach(row => {
      if (row.campaignContent !== null) {
        row.campaignContent = row.campaignContent.substring(row.campaignContent.indexOf('uploads'));
      } else {
        row.campaignContent = '';
      }
    });
    connection.execute(`SELECT * FROM winningAds`, (err, winningRows, fields) => {
      if (err) return next(err);
      winningRows.forEach(winner => {
        for (var i = 0; i < rows.length; i++) {
          if (rows[i].campaignID === winner.campaignID) {
            rows[i].isWinner = true;
          }
        }
      });
      res.status(200).send(rows);
    });
  });
});

router.get('/prevcompany/:id', (req, res, next) => {

  const query = `
    SELECT campaigns.*
      FROM winningAds
      JOIN campaigns
        ON winningAds.campaignID = campaigns.campaignID
     WHERE campaigns.companyID = ?
       AND submissionID IS NOT NULL
  `;

  connection.execute(query, [req.params.id], (err, rows, fields) => {
    if (err) return next(err);
    rows.forEach(row => {
      row.campaignContent = row.campaignContent
        ? row.campaignContent.substring(row.campaignContent.indexOf('uploads'))
        : '';
    });
    res.json(rows);
  });

});

// campaign details page

router.get('/:id', (req, res, next) => {
  var query = `SELECT
                                  co.companyName,
                                  co.companyLogo,
                                  co.companyType,
                                  ca.campaignTitle,
                                  ca.campaignID,
                                  ca.description,
                                  ca.companyID,
                                  ca.preferredContentType,
                                  ca.requirements,
                                  ca.runSpace,
                                  ca.rewards,
                                  ca.submissionsReceived,
                                  ca.campaignContent,
                                  ca.timeCreated AS campaignTimeCreated,
                                  GROUP_CONCAT(DISTINCT s.submissionThumbnail) AS submissionThumbnails,
                                  JSON_ARRAYAGG(s.likes) AS likes,
                                  GROUP_CONCAT(DISTINCT s.submissionContent) AS submissionsContent,
                                  GROUP_CONCAT(DISTINCT s.submissionID) AS submissionIDs,
                                  GROUP_CONCAT(DISTINCT s.title) AS submissionTitles,
                                  GROUP_CONCAT(DISTINCT s.submissionDescription) AS submissionDescriptions,
                                  GROUP_CONCAT(DISTINCT s.timeCreated) AS submissionTimeCreated
                        FROM      campaigns AS ca
                   LEFT JOIN      submissions AS s
                          ON      ca.campaignID = s.campaignID
                        JOIN      companies AS co
                          ON      co.companyID = ca.companyID
                       WHERE      ca.campaignID = ?
                    GROUP BY      ca.campaignID`;

  connection.execute(query, [req.params.id], (err, rows, fields) => {
    if (err) return next(err);
    if (rows[0]) {

      rows[0].submissions = [];
      if (rows[0].submissionThumbnails !== null) {
        rows[0].submissionThumbnails = rows[0].submissionThumbnails.split(',');
        rows[0].submissionThumbnails.forEach(thumbnail => {
          thumbnail = thumbnail.substring(thumbnail.indexOf('uploads'));
        });
      } else {
        rows[0].submissionThumbnails = '';
      }
      if (rows[0].submissionsContent !== null) {
        rows[0].submissionsContent = rows[0].submissionsContent.split(',');
        rows[0].submissionsContent.forEach(subs => {
          subs = subs.substring(subs.indexOf('uploads'));
        });
        for (var i = 0; i < rows[0].submissionsContent.length; i++) {
          rows[0].submissions[i] = {
            submissionThumbnail: '',
            submissionID: '',
            submissionContent: '',
            submissionDescription: '',
            likes: '',
            submissionTitle: '',
            submissionTimeCreated: ''
          };
        }
      } else {
        rows[0].submissionsContent = '';
      }
      if (rows[0].submissionIDs !== null) {
        rows[0].submissionIDs = rows[0].submissionIDs.split(',');
        rows[0].submissionIDs.forEach(ids => {
          ids = parseInt(ids);
        });
      } else {
        rows[0].submissionIDs = '';
      }
      if (rows[0].submissionDescriptions !== null) {
        rows[0].submissionDescriptions = rows[0].submissionDescriptions.split(',');
        rows[0].submissionDescriptions.reverse();
      } else {
        rows[0].submissionDescriptions = '';
      }
      if (rows[0].submissionTitles !== null) {
        rows[0].submissionTitles = rows[0].submissionTitles.split(',');
        rows[0].submissionTitles.reverse();
      } else {
        rows[0].submissionTitles = '';
      }
      if (rows[0].submissionTimeCreated !== null) {
        rows[0].submissionTimeCreated = rows[0].submissionTimeCreated.split(',');
      } else {
        rows[0].submissionTimeCreated = '';
      }
      if (rows[0].submissions) {
        rows[0].submissions.forEach((submission, index) => {
          submission.submissionThumbnail = rows[0].submissionThumbnails[index].substring(rows[0].submissionThumbnails[index].indexOf('uploads'));
          submission.submissionContent = rows[0].submissionsContent[index].substring(rows[0].submissionsContent[index].indexOf('uploads'));
          submission.submissionID = rows[0].submissionIDs[index];
          submission.submissionDescription = rows[0].submissionDescriptions[index];
          submission.likes = rows[0].likes[index];
          submission.submissionTitle = rows[0].submissionTitles[index];
          submission.submissionTimeCreated = rows[0].submissionTimeCreated[index];
        });
      }
      delete rows[0].submissionThumbnails;
      delete rows[0].submissionsContent;
      delete rows[0].submissionIDs;
      delete rows[0].submissionDescriptions;
      delete rows[0].likes;
      delete rows[0].submissionTitles;
      delete rows[0].submissionTimeCreated;
      res.status(200).send(rows[0]);
    }
  });
});

router.get('/', (req, res, next) => {
  connection.query('SELECT * FROM `campaigns`', (err, rows, fields) => {
    if (err) return next(err);
    res.status(200).json(rows);
  });
});

router.get('/campaignsLP', (req, res, next) => {
  connection.query('SELECT * FROM `campaigns` ORDER BY `campaignID` LIMIT 10', (err, rows, fields) => {
    if (err) return next(err);
    res.status(200).json(rows);
  });
});

module.exports = router;
