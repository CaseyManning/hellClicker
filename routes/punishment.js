var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('punishment', {
    title: 'Your punishment.',
    years: "5000",
    punishment: "to be skinned alive over and over again"
  });
});

module.exports = router;