const express = require('express');
const connection = require('./connection');
const router = express.Router();

router.post('/', (req, res, next) => {
  // var requestID = req.query.requestid;
  // var companyID = req.query.companyid;
  connection.query('INSERT INTO requests(companyID, description,) VALUES ()', (err, rows, fields) => {
    if (err) throw err;
    // var companyRow = rows.filter( row => {
    //   row.companyID === req.params.id;
    // })
    res.json({ requestID: 1 });
  });
  // res.json({ companyname: 'Target', companyLogo: 'https://www.aiga.org/globalassets/aiga/content/inspiration/corporate-awards/2006-target/target_header.png', companyID });

});

module.exports = router;
