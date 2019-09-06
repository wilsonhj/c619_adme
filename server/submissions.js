const express = require('express');
// const connection = require('./connection');
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

router.post('/', upload.single('submissionContent'), (req, res, next) => {

  // connection.query('SELECT * FROM `creators` WHERE `creatorID` = `' + creatorID + '`', (err, rows, fields) => {
  // if (err) throw err;
  let response = {
    requestBody: req.body,
    requestFileStorageInfo: req.file
  };
  res.json(response);

  // });

});

module.exports = router;
