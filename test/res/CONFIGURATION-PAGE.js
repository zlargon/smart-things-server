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
    "phase": "PAGE",
    "pageId": "1",
    "previousPageId": "",
    "config": {
      "app": [
        {}
      ]
    }
  },
  "settings": {}
}

const response = {
  configurationData: {
    page: {
      pageId: '1',
      name: 'NUCoach',
      nextPageId: null,
      previousPageId: null,
      complete: true,
      sections: [
        {
          name: 'contact sensor',
          settings: [
            {
              id: 'contactSensor',
              name: 'Which Contact Sensors?',
              description: 'Tap to set',
              type: 'DEVICE',
              required: true,
              multiple: true,
              capabilities: ['contactSensor'],
              permissions: ['r']
            }
          ]
        },
        {
          name: 'montion sensor',
          settings: [
            {
              id: 'motionSensor',
              name: 'Which Montion Sensor?',
              description: 'Tap to set',
              type: 'DEVICE',
              required: true,
              multiple: true,
              capabilities: ['motionSensor'],
              permissions: ['r']
            }
          ]
        }
      ]
    }
  }
}

module.exports = {
  request,
  response
}

