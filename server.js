// install customized console
require('./customized-console');

const express = require('express');
const morgan = require('morgan');

// SmartThings Lifecycle
const lifecycle = require('./lifecycle');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.post('/', (req, res, next) => {
  const body = req.body;

  // show lifecycle
  let title = `\nLIFECYCLE: ${body.lifecycle}`;
  if (body.lifecycle === 'CONFIGURATION') {
    title += ` - ${body.configurationData.phase}`;
  }
  console.yellow(title);

  // show request body
  if (body.lifecycle !== 'EVENT') {
    console.json(body);
  }

  // 1. PING
  if (body.lifecycle === 'PING') {
    res.status(200).json({
      pingData: body.pingData
    });
  }

  // 2. CONFIGURATION
  if (body.lifecycle === 'CONFIGURATION') {
    const result = lifecycle.configuration(body);
    res.status(200).json(result);
  }

  // 3. INSTALL
  if (body.lifecycle === 'INSTALL') {
    const data = body.installData;

    lifecycle
      .install(data)
      .then(() => {
        res.status(200).json({
          installData: {}
        });
      })
  }

  // 4. UPDATE
  if (body.lifecycle === 'UPDATE') {
    const data = body.updateData;

    lifecycle
      .update(data)
      .then(() => {
        res.status(200).json({
          updateData: {}
        });
      });
  }

  // 5. EVENT
  if (body.lifecycle === 'EVENT') {
    const data = body.eventData;

    lifecycle
      .event(data)
      .then(() => {
        res.status(200).json({
          eventData: {}
        });
      });
  }

  // 6. OAUTH_CALLBACK
  if (body.lifecycle === 'OAUTH_CALLBACK') {
    res.status(200).json({
      oAuthCallbackData: {}
    });
  }

  // 7. UNINSTALL
  if (body.lifecycle === 'UNINSTALL') {
    res.status(200).json({
      uninstallData: {}
    });
  }
});

const port = 3000;
app.listen(port);
console.log('http://localhost:3000');
