const fetch = require('node-fetch');

const create = async (installedAppId, authToken, deviceConfig) => {
  const url = `https://api.smartthings.com/installedapps/${installedAppId}/subscriptions`;
  const body = {
    sourceType: 'DEVICE',
    device: {
      componentId: deviceConfig.componentId,
      deviceId: deviceConfig.deviceId,
      stateChangeOnly: true,
      subscriptionName: "status_change",
      capability: '*',  // contactSensor
      attribute: '*',   // contact
      value: "*"        // open/closed
    }
  };

  const res = await fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + authToken
    },
    body: JSON.stringify(body)
  });

  const data = await res.json();

  // fail
  if (res.status !== 200) {
    const err = new Error('failed to create subscription');
    err.data = data;
    throw err;
  }

  // success
  return data;
}

const remove = async (installedAppId, authToken) => {
  const url = `https://api.smartthings.com/installedapps/${installedAppId}/subscriptions`;
  const res = await fetch(url, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + authToken
    }
  });

  const data = await res.json();

  // fail
  if (res.status !== 200) {
    const err = new Error('failed to detele subscription');
    err.data = data;
    throw err;
  }

  // success
  return data;
}

module.exports = {
  create,
  remove
}
