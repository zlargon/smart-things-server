module.exports = ({ configurationData, settings }) => {

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

          // sections
          sections: [
            {
              name: 'contact sensor',
              settings: [
                {
                  id: 'contactSensor',
                  name: 'Please select the Contact Sensors you want to upload data to NUCoach.',
                  description: 'Tap to set',
                  type: 'DEVICE',
                  required: true,
                  multiple: true,
                  capabilities: ['contactSensor'],
                  permissions: ['r']  // r, w, x
                }
              ]
            }
          ]
        }
      }
    }
  }
};
