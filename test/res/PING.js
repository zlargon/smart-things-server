const request = {
  "lifecycle": "PING",
  "executionId": "b328f242-c602-4204-8d73-33c48ae180af",
  "locale": "en",
  "version": "1.0.0",
  "pingData": {
    "challenge": "1a904d57-4fab-4b15-a11e-1c4bfe7cb502"
  }
}

const responseBody = {
  "pingData": {
    "challenge": "1a904d57-4fab-4b15-a11e-1c4bfe7cb502"
  }
}

module.exports = {
  request,
  responseStatus: 200,
  responseBody
}
