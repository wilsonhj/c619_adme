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

router.post('/', upload.single('submissionContent'), (req, res, next) => {
  let params = [req.body.creatorID, req.body.typeOfContent, req.file.path, req.body.title, req.body.requestID, req.body.likes];

  connection.execute('INSERT INTO `submissions` ( `creatorID`, `typeOfContent`, `submissionContent`, `title`, `requestID`, `likes`) VALUES ( ?, ?, ?, ?, ?, ?);', params, (err, rows, fields) => {

    if (err) throw err;
    let response = {
      requestBody: req.body,
      requestFileStorageInfo: req.file,
      mySqlRows: rows
    };
    if (!err) {
      res.json(response);
    }
  });

});

module.exports = router;
