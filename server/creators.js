const express = require('express');
const router = express.Router();

router.get('/:id', (req, res, next) => {
  // var creatorID = req.params.id;

  res.json({ creatorname: 'Target', creatorLogo: '', creatorID: 1 });
});

module.exports = router;
