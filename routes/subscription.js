const fetch = require('node-fetch');

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
  remove
}
