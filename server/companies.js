const express = require('express');
const connection = require('./connection');
const router = express.Router();

router.get('/:id', (req, res, next) => {
  connection.execute('SELECT * FROM companies WHERE companyID = ?', [req.params.id], (err, rows, fields) => {
    if (err) return next(err);
    if (rows[0] === undefined) {
      res.send('Company doesn\'t exist');
    }
    res.json(rows[0]);
  });
});

module.exports = router;
