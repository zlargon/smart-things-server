const fetch = require('node-fetch');
const chai = require('chai');
const expect = chai.expect;

const PING = require('./res/PING');
const INSTALL = require('./res/INSTALL');
const UPDATE = require('./res/UPDATE');

const testCaseFactory = (API) => {
  return async () => {
    const res = await fetch('http://localhost:3000', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(API.request)
    });
    expect(res.status).to.equal(API.responseStatus);

    const body = await res.json();
    expect(JSON.stringify(body)).to.equal(JSON.stringify(API.responseBody));
  }
}

describe('lifecycle', () => {

  // 1. PING
  it('PING', testCaseFactory(PING));

  // 2. CONFIGURATION

  // 3. INSTALL
  it('INSTALL', testCaseFactory(INSTALL));

  // 4. UPDATE
  it('UPDATE', testCaseFactory(UPDATE));

  // 5. EVENT

  // 6. OAUTH_CALLBACK

  // 7. UNINSTALL
});
