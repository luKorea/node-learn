const { createServer } = require('http')
const { createWriteStream } = require('fs')
 
const server = createServer((req, res) => {
  if(req.url === '/upload' && req.method === 'POST') {
    // 方式一写入，这里会将文件的其余信息一并写入，导致文件打不开
    const writeFile = createWriteStream('./foo.png', { flags: 'a+' })
    req.on('data', data => {
      console.log(data)
      writeFile.write(data)
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