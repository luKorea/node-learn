const fs = require('fs');

// 创建一个可写文件流，可以控制写入的位置
const writeStream = fs.createWriteStream('./info.txt', {
  flags: 'a'
});
// 可多次写入
writeStream.write('这是写入的内容', err => {
  if(!err) {
    console.log('写入成功');
  }
})
writeStream.write('写入新的内容', err => {
  if(!err) {
    console.log('写入成功');
  }
})

/**
 * end本质：
 * 调用write方法写入
 * 调用close关闭
 */
writeStream.end('这是调用end写入的内容');

writeStream.on('close', () => {
  console.log('写入完成，程序关闭');
})