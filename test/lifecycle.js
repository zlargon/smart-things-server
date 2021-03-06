const fetch = require('node-fetch');
const chai = require('chai');
const expect = chai.expect;

const PING = require('./res/PING');
const CONFIGURATION = {
  INITIALIZE: require('./res/CONFIGURATION-INITIALIZE'),
  PAGE: require('./res/CONFIGURATION-PAGE')
};
const INSTALL = require('./res/INSTALL');
const UPDATE = require('./res/UPDATE');
const EVENT = require('./res/EVENT');
const OAUTH_CALLBACK = require('./res/OAUTH_CALLBACK');
const UNINSTALL = require('./res/UNINSTALL');

const testCaseFactory = ({ request, response }) => {
  return async () => {
    const res = await fetch('http://localhost:3000', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request)
    });
    expect(res.status).to.equal(200);

    const body = await res.json();
    expect(JSON.stringify(body)).to.equal(JSON.stringify(response));
  }
}

describe('lifecycle', () => {

  // 1. PING
  it('PING', testCaseFactory(PING));

  // 2. CONFIGURATION
  describe('CONFIGURATION', () => {
    // Phase: INITIALIZE
    it('INITIALIZE', testCaseFactory(CONFIGURATION.INITIALIZE));

    // Phase: Page
    it('PAGE', testCaseFactory(CONFIGURATION.PAGE));
  });

  // 3. INSTALL
  it('INSTALL', testCaseFactory(INSTALL));

  // 4. UPDATE
  it('UPDATE', testCaseFactory(UPDATE));

  // 5. EVENT
  it('EVENT', testCaseFactory(EVENT));

  // 6. OAUTH_CALLBACK
  it('OAUTH_CALLBACK', testCaseFactory(OAUTH_CALLBACK));

  // 7. UNINSTALL
  it('UNINSTALL', testCaseFactory(UNINSTALL));
});
