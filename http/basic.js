const {
  createServer
} = require('http')

const HOST_PORT = 9999;
const HOST_PORT_BACK = 9998;
const HOST = '0.0.0.0'; // é»èź€æŻ0.0.0.0
const server = createServer((request, response) => {
  console.log(request.url);
  console.log(request.method);
  console.log(request.headers);
  response.end('this is test info')
})

server.listen(HOST_PORT, HOST, () => {
  console.log(`đđđđđđđđæćĄæ­ŁćšćŻćšäș ${HOST}:${HOST_PORT} đđđđđđđđđđđ`)
});
// çćŹç«ŻćŁæŻćŠèą«ć çšïŒć çšäœżçšć€çšç«ŻćŁ
server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log('Address in use, retrying...');
    setTimeout(() => {
      server.close();
      server.listen(HOST_PORT_BACK, HOST);
    }, 1000);
  }
});