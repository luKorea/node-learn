const fs = require('fs');

// 创建一个可读文件流
const readStream = fs.createReadStream('./demo.txt', {
  start: 2,
  end: 20,
  highWaterMark: 4,
});

readStream.on('data', (data) => {
  console.log(data)
  // 间隔一秒后重新读取文件
  readStream.pause();
  setTimeout(() => {
    readStream.resume();
  }, 1000)
})