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
           ca.campaignContent,
           ca.campaignID,
           co.companyName,
           co.companyLogo,
           co.companyType
      FROM campaigns AS ca
      JOIN companies AS co
        ON co.companyID = ca.companyID
     WHERE ca.companyID = ${req.params.id}
  `;

  connection.execute(query, [req.params.id], (err, rows, fields) => {
    if (err) throw err;
    rows.forEach(row => {
      if (row.campaignContent !== null) {
        row.campaignContent = row.campaignContent.substring(row.campaignContent.indexOf('uploads'));
      } else {
        row.campaignContent = '';
      }
    });
    res.send(rows);
  });
});

router.get('/', (req, res, next) => {
  connection.query('SELECT * FROM `campaigns`', (err, rows, fields) => {
    if (err) throw err;
    res.json(rows);
  });
});

module.exports = router;
