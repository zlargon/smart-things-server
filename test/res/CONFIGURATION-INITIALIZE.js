const request = {
  "lifecycle": "CONFIGURATION",
  "executionId": "c99423e3-3e7b-9892-2d70-868a09240a25",
  "locale": "en",
  "version": "0.1.0",
  "client": {
    "os": "ios",
    "version": "1.6.17",
    "language": "en"
  },
  "configurationData": {
    "installedAppId": "d58d4b3a-4b67-4a98-a6d2-cbcf504f4448",
    "phase": "INITIALIZE",
    "pageId": "",
    "previousPageId": "",
    "config": {}
  },
  "settings": {}
}

const response = {
  configurationData: {
    initialize: {
      name: 'NUCoach',
      description: 'Upload data to NUCoach',
      id: 'app',
      permissions:['l:devices'],
      firstPageId: '1'
    }
  }
}

module.exports = {
  request,
  response
}
