var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('Watches service::Get watches list');
  res.send('watches list from watches service');
});

module.exports = router;
