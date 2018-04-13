var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/more', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/component.html'));
})

router.get('/pic', (req, res) => {
  res.sendFile((path.join(__dirname, '../public/images/cat4.jpg')));
})

module.exports = router;
