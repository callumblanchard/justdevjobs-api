const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send(`Successfully verified JWT token. Extracted information: ${JSON.stringify(req.user)}`);
});

module.exports = router;
