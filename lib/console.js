console.yellow = (msg) => {
  console.log('\x1b[33m%s\x1b[0m', msg);
}

console.json = (data) => {
  console.log(JSON.stringify(data, null, 2));
}
