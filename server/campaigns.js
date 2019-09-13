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
                        ( companyID,title, description, preferredContentType, campaignContent, runSpace, requirements, rewards, submissionsReceived) 
                      VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, 0);`, params, (err, rows, fields) => {

    if (err) throw err;
    let response = {
      requestBody: req.body,
      requestFileStorageInfo: req.file,
      mySqlRows: rows
    };
    res.json(response);
  });

});

// company dashboard

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
     WHERE ca.companyID = ? 
  GROUP BY ca.campaignTitle
  `;

  connection.execute(query, [req.params.id], (err, rows, fields) => {
    if (err) throw err;
    rows.forEach(row => {
      if (row.submissionThumbnails !== null) {
        var submissionThumbnailArray = row.submissionThumbnails.split(',');
        row.submissionThumbnails = submissionThumbnailArray[0];
        row.submissionThumbnails = row.submissionThumbnails.substring(rows.submissionThumbnails.indexOf('uploads'));
      } else {
        row.submissionThumbnails = '';
      }
      if (row.submissionsContent !== null) {
        var submissionsContextArray = row.submissionsContent.split(',');
        row.submissionsContent = submissionsContextArray[0];
        row.submissionsContent = row.submissionsContent.substring(rows.submissionsContent.indexOf('uploads'));
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

// campaign details page

router.get('/:id', (req, res, next) => {
  var query = `SELECT  
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
                                  GROUP_CONCAT(DISTINCT s.submissionContent) AS submissionsContent,
                                  GROUP_CONCAT(DISTINCT s.submissionID) AS submissionIDs,
                                  GROUP_CONCAT(DISTINCT s.title) AS submissionTitles,
                                  GROUP_CONCAT(DISTINCT s.likes) AS likes,
                                  GROUP_CONCAT(DISTINCT s.submissionDescription) AS submissionDescriptions,
                                  GROUP_CONCAT(DISTINCT s.timeCreated) AS submissionTimeCreated
                        FROM      campaigns AS ca  
                   LEFT JOIN      submissions AS s
                          ON      ca.campaignID = s.campaignID
                       WHERE      ca.campaignID = ?
                    GROUP BY      ca.campaignID`;

  connection.execute(query, [req.params.id], (err, rows, fields) => {
    if (err) throw err;
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
    } else {
      rows[0].submissionDescriptions = '';
    }
    if (rows[0].submissionTitles !== null) {
      rows[0].submissionTitles = rows[0].submissionTitles.split(',');
    } else {
      rows[0].submissionTitles = '';
    }
    if (rows[0].submissionTimeCreated !== null) {
      rows[0].submissionTimeCreated = rows[0].submissionTimeCreated.split(',');
    } else {
      rows[0].submissionTimeCreated = '';
    }

    rows[0].likes = rows[0].likes.split(',');

    res.send(rows[0]);
  });
});

router.get('/', (req, res, next) => {
  connection.query('SELECT * FROM `campaigns`', (err, rows, fields) => {
    if (err) throw err;
    res.json(rows);
  });
});

module.exports = router;
