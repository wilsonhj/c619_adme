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

router.get('/', (req, res, next) => {
  connection.query('SELECT * FROM `submissions`', (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
  });
});

router.get('/:submissionID', (req, res, next) => {
  connection.query('SELECT * FROM `submissions` WHERE `submissionID` = ' + req.params.submissionID, (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
  });
});

router.get('/trendingSubmissions', (req, res, next) => {
  const query = 'SELECT c.creatorID, c.first_name AS firstName, c.last_name AS lastName, c.profilePicture AS profilePicture, s.submissionID AS subID, s.creatorID, s.title AS title, s.likes, s.submissionThumbnail FROM `creators` AS c JOIN `submissions` AS s ON s.creatorID = c.creatorID';

  connection.query(query, (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
  });
});

router.post('/likes', upload.single(''), (req, res, next) => {
  connection.execute('UPDATE submissions SET `likes` = likes + 1 WHERE `submissionID` = ?', [req.body.submissionID], (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
  });
});

router.post('/', upload.fields([{ name: 'submissionThumbnail' }, { name: 'submissionContent' }]), (req, res, next) => {
  let params = [req.body.creatorID, req.body.typeOfContent, req.files.submissionThumbnail[0].path, req.files.submissionContent[0].path, req.body.title, req.body.campaignID, req.body.likes, req.body.submissionDescription];

  connection.execute('INSERT INTO `submissions` ( `creatorID`, `typeOfContent`, `submissionThumbnail`, `submissionContent`, `title`, `campaignID`, `likes`, `submissionDescription`) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?);', params, (err, rows, fields) => {

    if (err) throw err;
    let response = {
      requestBody: req.body,
      requestFileStorageInfo: req.files,
      mySqlRows: rows
    };
    if (!err) {
      res.json(response);
    }
  });

});

module.exports = router;
