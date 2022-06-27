const express = require('express');
const app = express();

// 中间件练习，实现body中间件
// app.use((req, res, next) => {
//   if (req.headers['content-type'] === 'application/json') {
//     req.on('data', data => {
//       const info = JSON.parse(data.toString())
//       req.body = info;
//     })
//     req.on('end', () => {
//       next()
//     })
//   } else next()
// })
// express内置body解析中间件
app.use(express.json())
// express内置urlencoded
app.use(express.urlencoded({
  extended: true // 设置为true表示使用qs第三方库进行解析
}))
app.post('/login', (req, res, next) => {
  console.log(req.body, 'body');
  res.end('login success')
})

app.listen(9092, () => {
  console.log('serve is start');
})