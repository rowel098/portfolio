var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'About', page: 'about' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects', page: 'projects' })
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact', page: 'contact' });
});

module.exports = router;
