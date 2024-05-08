const http = require('http');
const postData = process.argv[2];

const path = `/t?p=${sendData}`;
const options = { hostname: '127.0.0.1', port: 8081, path: path, method: 'GET' };
const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

req.end();
