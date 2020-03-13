var express = require('express');
var db = require('../config/database');
var router = express.Router();

/* API Modules */
router.get('/', function(req, res) {
  res.send('ws root jujuju ')
});

router.get('/depa', function(req, res) {
  var dbc = db();
  dbc.exeq(req,res,'select * from Tbl_Department')
});

router.get('/depa/:id', function(req, res) {
  var dbc = db();
  dbc.exeq(req,res,'select top 1 * from Tbl_Department where Id='+req.params.id)
});

module.exports = router;