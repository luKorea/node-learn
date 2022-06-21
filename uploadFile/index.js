const { createServer } = require('http')
 
const server = createServer((req, res) => {
  if(req.url === '/upload' && req.method === 'POST') {
    req.on('data', data => {
      console.log(data)
    })
    req.on('end', () => {
      console.log('文件上传成功');
      res.end('文件上传成功')
    })
  } else res.end('info')
})

server.listen(9090, () => {
  console.log('服务已经启动');
})