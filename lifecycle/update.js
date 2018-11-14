const subscription = require('../lib/subscription');

module.exports = async ({ updateData: data }) => {
  const authToken = data.authToken;
  const installedAppId = data.installedApp.installedAppId;

  console.yellow('SUBSCRIPTION: Remove');
  try {
    const res = await subscription.remove(installedAppId, authToken);
    console.json(res);
  } catch (e) {
    console.json(e);
  }

  // subscribe contact sensor
  const contactSensor = data.installedApp.config.contactSensor;
  if (contactSensor && contactSensor.length !== 0) {
    console.yellow('SUBSCRIPTION: Create Contact Sensor');
    for (const sensor of contactSensor) {
      try {
        const res = await subscription.create(
          installedAppId,
          authToken,
          'contact_sensor_sub',
          sensor.deviceConfig
        );
        console.json(res);
      } catch (e) {
        console.json(e);
      }
    }
  }

  // subscribe motion sensor
  const motionSensor = data.installedApp.config.motionSensor;
  if (motionSensor && motionSensor.length !== 0) {
    console.yellow('SUBSCRIPTION: Create Motion Sensor');
    for (const sensor of motionSensor) {
      try {
        const res = await subscription.create(
          installedAppId,
          authToken,
          'motion_sensor_sub',
          sensor.deviceConfig
        );
        console.json(res);
      } catch (e) {
        console.json(e);
      }
    }
  }

  return {
    updateData: {}
  };
}
