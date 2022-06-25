const app = require('express')();

// 中间件练习，实现body中间件

app.post('/login', (req, res, next) => {
  req.on('data', (data) => {
    console.log(data.toString());
  })
  res.end('login success')
})

app.listen(9092, () => {
  console.log('serve is start');
})