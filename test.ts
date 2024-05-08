const http = require('http');
const postData = process.argv[2];
const options = { hostname: '104.41.156.21', port: 80, path: '/', method: 'POST' };
const req = http.request(options);
req.write(postData);
