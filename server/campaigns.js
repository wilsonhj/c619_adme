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
  let params = [req.body.companyID, req.body.description, req.file.path, req.body.runSpace, req.body.requirements, req.body.rewards];

  connection.execute('INSERT INTO `requests` ( `companyID`, `description`, `campaignContent`, `runSpace`, `requirements`, `rewards`, `submissionsReceived`) VALUES ( ?, ?, ?, ?, ?, ?, 1);', params, (err, rows, fields) => {

    if (err) throw err;
    let response = {
      requestBody: req.body,
      requestFileStorageInfo: req.file,
      mySqlRows: rows
    };
    res.json(response);
  });

});

module.exports = router;
