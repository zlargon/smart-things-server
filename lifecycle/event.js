module.exports = async ({ eventData: data }) => {
  for (const event of data.events) {
    console.json(event.deviceEvent);
  }

  return {
    eventData: {}
  };
}
