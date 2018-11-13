module.exports = async (data) => {
  for (const event of data.events) {
    const { capability, attribute, value } = event.deviceEvent;

    console.log('\n\n')
    console.yellow(`capability: ${capability}`);
    console.yellow(`attribute: ${attribute}`);
    console.yellow(`value: ${value}`);
    console.json(event.deviceEvent);
  }
}
