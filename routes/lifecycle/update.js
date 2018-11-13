const subscription = require('../subscription');

module.exports = async (data) => {
  const authToken = data.authToken;
  const installedAppId = data.installedApp.installedAppId;

  console.yellow('Subscription Remove');
  try {
    await subscription.remove(installedAppId, authToken);
  } catch (e) {
    console.log(e);
  }

  console.yellow('Subscription Create Contact Sensor');
  for (const contactSensor of data.installedApp.config.contactSensor) {
    try {
      await subscription.create(
        installedAppId,
        authToken,
        'contact_sensor_sub',
        contactSensor.deviceConfig
      );
    } catch (e) {
      console.log(e);
    }
  }

  console.yellow('Subscription Create Motion Sensor');
  for (const motionSensor of data.installedApp.config.motionSensor) {
    try {
      await subscription.create(
        installedAppId,
        authToken,
        'motion_sensor_sub',
        motionSensor.deviceConfig
      );
    } catch (e) {
      console.log(e);
    }
  }
}
