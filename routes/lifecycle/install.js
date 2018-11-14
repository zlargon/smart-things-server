const subscription = require('../subscription');

module.exports = async (data) => {
  const authToken = data.authToken;
  const installedAppId = data.installedApp.installedAppId;

  console.yellow('SUBSCRIPTION: Create Contact Sensor');
  for (const contactSensor of data.installedApp.config.contactSensor) {
    try {
      const res = await subscription.create(
        installedAppId,
        authToken,
        'contact_sensor_sub',
        contactSensor.deviceConfig
      );
      console.json(res);
    } catch (e) {
      console.json(e);
    }
  }

  console.yellow('SUBSCRIPTION: Create Motion Sensor');
  for (const motionSensor of data.installedApp.config.motionSensor) {
    try {
      const res = await subscription.create(
        installedAppId,
        authToken,
        'motion_sensor_sub',
        motionSensor.deviceConfig
      );
      console.json(res);
    } catch (e) {
      console.json(e);
    }
  }
}

