module.exports = async (data) => {
  for (const event of data.events) {
    console.json(event.deviceEvent);
  }
}
