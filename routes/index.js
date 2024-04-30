var express = require('express');
var router = express.Router();

var jsonDb = require('../projects.json');
// jsonDb = JSON.stringify(jsonDb);
console.log(jsonDb);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Project Viewer' , json: jsonDb});
});

module.exports = router;
