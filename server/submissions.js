const express = require('express');
// const connection = require('./connection');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('submissionImage'), (req, res, next) => {

  // connection.query('SELECT * FROM `creators` WHERE `creatorID` = `' + creatorID + '`', (err, rows, fields) => {
  // if (err) throw err;

  res.json(req);
  // });

});

module.exports = router;
