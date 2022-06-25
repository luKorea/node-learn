// express 中间件的使用
const app = require('express')();


// 1. 注册一个普通中间件
/** 
app.use((req, res, next) => {
  console.log('注册普通中间件');
  next();
})
app.use((req, res, next) => {
  console.log('注册普通中间件1');
  next()
})
app.use((req, res, next) => {
  console.log('注册普通中间件2');
  res.end('最后这里返回数据')
})
**/

// 2. 特殊中间件
app.get('/', (req, res, next) => {
  console.log(next);
  res.end('这是中间件的特殊情况')
})


// 3. 路径匹配中间件

app.listen(9091, () => {
  console.log('server is start');
})