module.exports = async ({ eventData: data }) => {
  for (const event of data.events) {
    console.json(event.deviceEvent);

    const data = {
      timestamp: Date.now()
      deviceId: event.deviceEvent.deviceId,
      hubId: event.deviceEvent.locationId,
      deviceType: event.deviceEvent.capability,
      value: event.deviceEvent.value
    };
  }

  // TODO: upload to Parser

  return {
    eventData: {}
  };
}
