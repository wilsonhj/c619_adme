const express = require('express');
const connection = require('./connection');
const router = express.Router();

router.get('/:id', (req, res, next) => {
  // var companyID = req.params.id;
  connection.query('SELECT * FROM companies', (err, rows, fields) => {
    if (err) throw err;
    // var companyRow = rows.filter( row => {
    //   row.companyID === req.params.id;
    // })
    res.json(rows[0]);
  });
  // res.json({ companyname: 'Target', companyLogo: 'https://www.aiga.org/globalassets/aiga/content/inspiration/corporate-awards/2006-target/target_header.png', companyID });

});

module.exports = router;
