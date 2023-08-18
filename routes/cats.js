var express = require('express');
var router = express.Router();

const ROOT_URL = 'https://catfact.ninja'

/* GET home page. */
router.get('/', function(req, res, next) {
  fetch(`${ROOT_URL}/fact`)
    .then(res => res.json())
    .then(catFact => {
      console.log(catFact);
      res.render('cats/index', { catFact, title: 'Cat Fact' })
    })
});

module.exports = router;
