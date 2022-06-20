const {
  createServer
} = require('http')

const HOST_PORT = 9999;
const HOST_PORT_BACK = 9998;
const HOST = '127.0.0.1';
const server = createServer((request, response) => {
  response.end('this is test info')
})

server.listen(HOST_PORT, HOST, () => {
  console.log(`🚀🚀🚀🚀🚀🚀🚀🚀服务正在启动于 ${HOST}:${HOST_PORT} 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀`)
});
// 监听端口是否被占用，占用使用备用端口
server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log('Address in use, retrying...');
    setTimeout(() => {
      server.close();
      server.listen(HOST_PORT_BACK, HOST);
    }, 1000);
  }
});