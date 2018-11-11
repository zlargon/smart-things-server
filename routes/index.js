var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Samsung Lifecycle
router.post('/', (req, res, next) => {
  console.log(req.body);

  // 1. PING
  // https://smartthings.developer.samsung.com/develop/guides/smartapps/lifecycles.html#PING
  if (req.body.lifecycle === 'PING') {
    res.status(200).json({
      pingData: req.body.pingData
    });
  }

  // 2. CONFIGURATION

  // 3. INSTALL
  // https://smartthings.developer.samsung.com/develop/guides/smartapps/lifecycles.html#INSTALL
  if (req.body.lifecycle === 'INSTALL') {
    res.status(200).json({
      installData: {}
    });
  }

  // 4. UPDATE
  // https://smartthings.developer.samsung.com/develop/guides/smartapps/lifecycles.html#UPDATE
  if (req.body.lifecycle === 'UPDATE') {
    res.status(200).json({
      updateData: {}
    });
  }

  // 5. EVENT

  // 6. OAUTH_CALLBACK

  // 7. UNINSTALL
});

module.exports = router;
