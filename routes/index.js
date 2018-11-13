const express = require('express');
const router = express.Router();

// install customized console
require('./customized-console');

// SmartThings Lifecycle
const lifecycle = require('./lifecycle');

const showRequestBody = (body) => {
  let title = body.lifecycle;
  if (body.lifecycle === 'CONFIGURATION') {
    title += ' - ' + body.configurationData.phase;
  }

  console.log('\n\n');
  console.yellow(title);
  console.json(body);
}

// Samsung Lifecycle
router.post('/', (req, res, next) => {
  showRequestBody(req.body);

  // 1. PING
  // https://smartthings.developer.samsung.com/develop/guides/smartapps/lifecycles.html#PING
  if (req.body.lifecycle === 'PING') {
    res.status(200).json({
      pingData: req.body.pingData
    });
  }

  // 2. CONFIGURATION
  // https://smartthings.developer.samsung.com/develop/guides/smartapps/lifecycles.html#CONFIGURATION
  if (req.body.lifecycle === 'CONFIGURATION') {
    const result = lifecycle.configuration(req.body);
    res.status(200).json(result);
  }

  // 3. INSTALL
  // https://smartthings.developer.samsung.com/develop/guides/smartapps/lifecycles.html#INSTALL
  if (req.body.lifecycle === 'INSTALL') {
    const data = req.body.installData;

    lifecycle
      .install(data)
      .then(() => {
        res.status(200).json({
          installData: {}
        });
      })
  }

  // 4. UPDATE
  // https://smartthings.developer.samsung.com/develop/guides/smartapps/lifecycles.html#UPDATE
  if (req.body.lifecycle === 'UPDATE') {
    const data = req.body.updateData;

    lifecycle
      .update(data)
      .then(() => {
        res.status(200).json({
          updateData: {}
        });
      });
  }

  // 5. EVENT
  // https://smartthings.developer.samsung.com/develop/guides/smartapps/lifecycles.html#EVENT
  if (req.body.lifecycle === 'EVENT') {
    const data = req.body.eventData;

    lifecycle
      .event(data)
      .then(() => {
        res.status(200).json({
          eventData: {}
        });
      });
  }

  // 6. OAUTH_CALLBACK
  // https://smartthings.developer.samsung.com/develop/guides/smartapps/lifecycles.html#OAUTH_CALLBACK
  if (req.body.lifecycle === 'OAUTH_CALLBACK') {
    res.status(200).json({
      oAuthCallbackData: {}
    });
  }

  // 7. UNINSTALL
  // https://smartthings.developer.samsung.com/develop/guides/smartapps/lifecycles.html#UNINSTALL
  if (req.body.lifecycle === 'UNINSTALL') {
    res.status(200).json({
      uninstallData: {}
    });
  }
});

module.exports = router;
