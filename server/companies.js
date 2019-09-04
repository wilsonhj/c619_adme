const express = require('express');
const router = express.Router();

router.get('/:id', (req, res, next) => {
  // var companyID = req.params.id;

  res.json({ companyname: 'Target', companyLogo: '', companyID: 1 });
});

module.exports = router;
