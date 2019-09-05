const express = require('express');
const router = express.Router();

router.get('/:id', (req, res, next) => {
  var companyID = req.params.id;

  res.json({ companyname: 'Target', companyLogo: 'https://www.aiga.org/globalassets/aiga/content/inspiration/corporate-awards/2006-target/target_header.png', companyID });
});

module.exports = router;
