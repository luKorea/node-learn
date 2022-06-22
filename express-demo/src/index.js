const app = require('express')();
app.get('/', (req, res) => {
  console.log(req.headers);
  res.end('hello express')
})

app.post('/login', (req, res) => {
  console.log(req);
  res.end('login success')
})

app.listen(9090, () => {
  console.log('express 服务器启动');
})