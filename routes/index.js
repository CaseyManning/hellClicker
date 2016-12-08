var express = require('express');
var router = express.Router();

var location = "house";
//var actions = 

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', {
    title: 'Hell Clicker',
    text: "You have just woken up, and you are lying in your bed",
    option1: "Stay in bed",
    option2: "Go outside",
    option3: "Take out your phone"
  });
});

module.exports = router;