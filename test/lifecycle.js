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

  // 4. UPDATE

  // 5. EVENT

  // 6. OAUTH_CALLBACK

  // 7. UNINSTALL
});
