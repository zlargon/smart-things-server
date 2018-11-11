const fetch = require('node-fetch');
const chai = require('chai');
const expect = chai.expect;

const post = (body) => {
  return fetch('http://localhost:3000', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
}

describe('lifecycle', () => {

  // 1. PING
  it('PING', async () => {
    const res = await post({
      "lifecycle": "PING",
      "executionId": "b328f242-c602-4204-8d73-33c48ae180af",
      "locale": "en",
      "version": "1.0.0",
      "pingData": {
        "challenge": "1a904d57-4fab-4b15-a11e-1c4bfe7cb502"
      }
    });
    expect(res.status).to.equal(200);

    const body = await res.json();
    expect(JSON.stringify(body)).to.equal(JSON.stringify({
      "pingData": {
        "challenge": "1a904d57-4fab-4b15-a11e-1c4bfe7cb502"
      }
    }));
  });

  // 2. CONFIGURATION

  // 3. INSTALL
  it('INSTALL', async () => {
    const res = await post({
      "lifecycle": "INSTALL",
      "executionId": "b328f242-c602-4204-8d73-33c48ae180af",
      "locale": "en",
      "version": "1.0.0",
      "installData": {
        "authToken": "string",
        "refreshToken": "string",
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
            "lightSwitch": [
              {
                "valueType": "DEVICE",
                "deviceConfig": {
                  "deviceId": "74aac3bb-91f2-4a88-8c49-ae5e0a234d76",
                  "componentId": "main"
                }
              }
            ],
            "minutes": [
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
        }
      },
      "settings": {
        "property1": "string",
        "property2": "string"
      }
    });
    expect(res.status).to.equal(200);

    const body = await res.json();
    expect(JSON.stringify(body)).to.equal(JSON.stringify({
      "installData": {}
    }));
  });

  // 4. UPDATE

  // 5. EVENT

  // 6. OAUTH_CALLBACK

  // 7. UNINSTALL
});
