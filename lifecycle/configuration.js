module.exports = async ({ configurationData, settings }) => {

  // INITIALIZE
  if (configurationData.phase === 'INITIALIZE') {
    return {
      configurationData: {
        initialize: {
          name: 'NUCoach',
          description: 'Upload data to NUCoach',
          id: 'app',

          // Need list devices permission for app to allow user to select devices
          permissions:['l:devices'],
          firstPageId: '1'
        }
      }
    }
  }

  // PAGE
  if (configurationData.phase === 'PAGE') {
    return {
      configurationData: {
        page: {
          pageId: '1',
          name: 'NUCoach',
          nextPageId: null,
          previousPageId: null,
          complete: true, // last page
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
                  permissions: ['r']  // r, w, x
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
  }
};
