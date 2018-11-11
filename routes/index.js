var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Samsung Lifecycle
router.post('/', (req, res, next) => {
  console.log(req.body);

  // PING
  // https://smartthings.developer.samsung.com/develop/guides/smartapps/lifecycles.html#PING
  if (req.body.lifecycle === 'PING') {
    res.status(200).json({
      pingData: req.body.pingData
    });
  }

});

module.exports = router;
