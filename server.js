// install customized console
require('./lib/console');

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
    lifecycle.ping(body).then(result => {
      res.status(200).json(result);
    });
  }

  // 2. CONFIGURATION
  if (body.lifecycle === 'CONFIGURATION') {
    lifecycle.configuration(body).then(result => {
      res.status(200).json(result);
    });
  }

  // 3. INSTALL
  if (body.lifecycle === 'INSTALL') {
    lifecycle.install(body).then(result => {
      res.status(200).json(result);
    })
  }

  // 4. UPDATE
  if (body.lifecycle === 'UPDATE') {
    lifecycle.update(body).then(result => {
      res.status(200).json(result);
    });
  }

  // 5. EVENT
  if (body.lifecycle === 'EVENT') {
    lifecycle.event(body).then(result => {
      res.status(200).json(result);
    });
  }

  // 6. OAUTH_CALLBACK
  if (body.lifecycle === 'OAUTH_CALLBACK') {
    lifecycle.oAuthCallback(body).then(result => {
      res.status(200).json(result);
    });
  }

  // 7. UNINSTALL
  if (body.lifecycle === 'UNINSTALL') {
    lifecycle.uninstall(body).then(result => {
      res.status(200).json(result);
    });
  }
});

const port = 3000;
app.listen(port);
console.log('http://localhost:3000');
