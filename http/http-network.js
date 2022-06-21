const http = require('http');

http.get('http://localhost:3000', res => {
  res.on('data', data => {
    console.log(data.toString());
    console.log(JSON.parse(data.toString()));
  })
})
const postHttp = http.request({
  method: 'POST',
  hostname: 'localhost',
  port: 8080,
}, res => {
  res.on('data', data => {
    console.log(data.toString());
    console.log(JSON.parse(data.toString()));
  })
})
postHttp.end()