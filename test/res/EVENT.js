const request = {
  "lifecycle": "EVENT",
  "executionId": "b328f242-c602-4204-8d73-33c48ae180af",
  "locale": "en",
  "version": "1.0.0",
  "eventData": {
    "authToken": "f01894ce-013a-434a-b51e-f82126fd72e4",
    "installedApp": {
      "installedAppId": "d692699d-e7a6-400d-a0b7-d5be96e7a564",
      "locationId": "e675a3d9-2499-406c-86dc-8a492a886494",
      "config": {
        "contactSensor": [
          {
            "valueType": "DEVICE",
            "deviceConfig": {
              "deviceId": "e457978e-5e37-43e6-979d-18112e12c961",
              "componentId": "main"
            }
          }
        ],
        "lightSwitch":[
          {
            "valueType": "DEVICE",
            "deviceConfig": {
              "deviceId": "74aac3bb-91f2-4a88-8c49-ae5e0a234d76",
              "componentId": "main"
            }
          }
        ],
        "minutes":[
          {
            "valueType": "STRING",
            "stringConfig": {
              "value": "5"
            }
          }
        ],
        "permissions": [
          "r:devices:e457978e-5e37-43e6-979d-18112e12c961",
          "r:devices:74aac3bb-91f2-4a88-8c49-ae5e0a234d76",
          "x:devices:74aac3bb-91f2-4a88-8c49-ae5e0a234d76"
        ]
      }
    },
    "events": [
      // DEVICE_EVENT
      {
        "eventType": "DEVICE_EVENT",
        "deviceEvent": {
          "subscriptionName": "motion_sensors",
          "eventId": "736e3903-001c-4d40-b408-ff40d162a06b",
          "locationId": "499e28ba-b33b-49c9-a5a1-cce40e41f8a6",
          "deviceId": "6f5ea629-4c05-4a90-a244-cc129b0a80c3",
          "componentId": "main",
          "capability": "motionSensor",
          "attribute": "motion",
          "value" :"active",
          "stateChange": true
        }
      },

      // TIMER_EVENT
      {
        "eventType": "TIMER_EVENT",
        "timerEvent": {
          "eventId": "string",
          "name": "lights_off_timeout",
          "type": "CRON",
          "time": "2017-09-13T04:18:12.469Z",
          "expression": "string"
        }
      }
    ]
  },
  "settings": {
    "property1": "string",
    "property2": "string"
  }
}

const responseBody = {
  "eventData": {}
}

module.exports = {
  request,
  responseStatus: 200,
  responseBody
}
