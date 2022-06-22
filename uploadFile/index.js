const { createServer } = require('http')
const qs = require('qs')
const server = createServer((req, res) => {
  if(req.url === '/upload' && req.method === 'POST') {
    req.setEncoding('binary')
    let body = ''
    req.on('data', data => {
      body += data
    })
    req.on('end', () => {
      console.log(body);
    // 1. 获取图片类型位置，截取
      const payload = qs.parse(body, "\r\n", ": ");
      const type = payload['Content-Type'];
      const typeIndex = body.indexOf(type);
      const typeLength = type.length;
      console.log('文件上传成功');
      res.end('文件上传成功~~')
    })
  } else res.end('info')
})

server.listen(9090, () => {
  console.log('服务已经启动');
})