const express = require('express');
const router = express.Router();
const subscription = require('./subscription');

console.yellow = (msg) => {
  console.log('\x1b[33m%s\x1b[0m', msg);
}

console.json = (data) => {
  console.log(JSON.stringify(data, null, 2));
}

const lifecycle = {
  configuration: require('./lifecycle/configuration')
};

const showRequestBody = (body) => {
  let title = body.lifecycle;
  if (body.lifecycle === 'CONFIGURATION') {
    title += ' - ' + body.configurationData.phase;
  }

  console.log('\n\n');
  console.yellow(title);
  console.json(body);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

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
    const { installData } = req.body;
    const authToken = installData.authToken;
    const installedAppId = installData.installedApp.installedAppId;

    (async () => {
      console.yellow('Subscription Create');
      for (const contactSensor of updateData.installedApp.config.contactSensor) {
        try {
          await subscription.create(
            installedAppId,
            authToken,
            'contact_sensor_sub',
            contactSensor.deviceConfig
          );
        } catch (e) {
          console.log(e);
        }
      }

      for (const motionSensor of updateData.installedApp.config.motionSensor) {
        try {
          await subscription.create(
            installedAppId,
            authToken,
            'motion_sensor_sub',
            motionSensor.deviceConfig
          );
        } catch (e) {
          console.log(e);
        }
      }

      res.status(200).json({
        installData: {}
      });
    })();
  }

  // 4. UPDATE
  // https://smartthings.developer.samsung.com/develop/guides/smartapps/lifecycles.html#UPDATE
  if (req.body.lifecycle === 'UPDATE') {
    const { updateData } = req.body;
    const authToken = updateData.authToken;
    const installedAppId = updateData.installedApp.installedAppId;

    (async () => {
      console.yellow('Subscription Remove');
      try {
        await subscription.remove(installedAppId, authToken);
      } catch (e) {
        console.log(e);
      }

      console.yellow('Subscription Create');
      for (const contactSensor of updateData.installedApp.config.contactSensor) {
        try {
          await subscription.create(
            installedAppId,
            authToken,
            'contact_sensor_sub',
            contactSensor.deviceConfig
          );
        } catch (e) {
          console.log(e);
        }
      }

      for (const motionSensor of updateData.installedApp.config.motionSensor) {
        try {
          await subscription.create(
            installedAppId,
            authToken,
            'motion_sensor_sub',
            motionSensor.deviceConfig
          );
        } catch (e) {
          console.log(e);
        }
      }

      res.status(200).json({
        updateData: {}
      });
    })();
  }

  // 5. EVENT
  // https://smartthings.developer.samsung.com/develop/guides/smartapps/lifecycles.html#EVENT
  if (req.body.lifecycle === 'EVENT') {
    res.status(200).json({
      eventData: {}
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
