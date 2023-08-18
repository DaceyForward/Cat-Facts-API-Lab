var express = require('express');
var router = express.Router();

//const ROOT_URL = 'https://catfact.ninja'

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cat Facts' });
});

module.exports = router;
