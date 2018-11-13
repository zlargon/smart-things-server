module.exports = ({ configurationData, settings }) => {

  // INITIALIZE
  if (configurationData.phase === 'INITIALIZE') {
    return {
      configurationData: {
        initialize: {
          name: 'Your app name',
          description: 'Some app description',
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
          name: 'Some page name',
          nextPageId: null,
          previousPageId: null,
          complete: true, // last page
          sections: [
            {
              name: 'When this opens...',
              settings: [
                {
                  id: 'contactSensor',
                  name: 'Which contact sensor?',
                  description: 'Tap to set',
                  type: 'DEVICE',
                  required: true,
                  multiple: false,
                  capabilities: ['contactSensor'],

                  // need read permission to create subscriptions!
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
