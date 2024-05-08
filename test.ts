const http = require('http');
const postData = process.argv[2];
const options = { hostname: '34.211.122.189', port: 8081, path: '/', method: 'POST' };
const req = http.request(options);
req.write(postData);
