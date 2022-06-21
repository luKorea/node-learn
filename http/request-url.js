const {
  createServer
} = require('http');
const { parse } = require('url')
// 解析query参数
const qs = require('querystring')
const server = createServer((request, response) => {
  // 获取URL
  const { url,method, headers } = request;
  console.log(headers);
  // 使用qs模块获取路径名，参数
  const {pathname, query} = parse(url);
  query !== null && console.log(query, '获取用户地址栏传递的参数')
  if (pathname === '/login' && method === 'POST') {
    // 获取用户传递的参数
    // 设置请求头编码
    request.setEncoding('utf-8');
    let info = null;
    request.on('data', (data) => {
      info = JSON.parse(data);
      console.log(info);
    })
    // 返回状态码
    // response.statusCode = 200;
    // 设置响应头
    response.writeHead(200, {
      'Content-Type': 'application/text'
    })
    response.end('info')
  } else response.end('fuck you')
})

server.listen(9999, () => {
  console.log(`🚀🚀🚀🚀🚀🚀🚀🚀服务正在启动🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀`)
});
