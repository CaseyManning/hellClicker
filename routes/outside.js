var express = require('express');
var router = express.Router();

var location = "house";
//var actions = 

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', {
    title: 'Hell Clicker',
    text: "You are out on the street. The house next to yours has always looked particularly fancy.",
    option1: "Knock on the door",
    option2: "Break the window",
    option3: "Keep walking"
  });
});

module.exports = router;