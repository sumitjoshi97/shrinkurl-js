var express = require('express');
var router = express.Router();
var Url = require('/models/Url');
var mongoose = require('mongoose');
mongoose.promise = global.Promise;
var schema = require('../controllers/schema');
var isValid = require('../controllers/isValid');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Url Shortner'});
});

router.get('/api/:id', function (req, res, next) {
  var original = req.params.id;

  if (isValid(long)) {
    var short = schema(original);
    res.json({original: original, short: short});
  }
});

module.exports = router;